import React from 'react';
import { Table } from 'antd';
import {request} from 'umi';
import ColumnRenderMap from '@/commons/ColumnRenderMap';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: {
        current: 1,
        pageNumber: 1,
        pageSize: 20,
        total: 0,
      },
      mappData: {},
      fetch: props.fetch,
      params: props.params || {},
      loading: false,
    };
  }

  componentDidMount() {
    const { page, params={}, fetch } = this.state;
    if(fetch){
      this.fetch({ page, ...params });
    }
  }

  handleTableChange = (page, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...this.state.params,
      page,
    });
  };

  reload = () => {
    this.fetch(this.state.params);
  };

  fetch = (params = {}) => {
    this.setState({
      loading: true,
      params,
    });
    const reqParam = {...(this.props.queryParam || {}) };
    for(const k in params){
      const value = params[k];
      if(value){
        reqParam[k] = value;
      }
    }
    const paramPage = params.page || {};
    const newPage = Object.assign({}, this.state.page);
    if (paramPage.current) {
      newPage.current = paramPage.current;
    }
    if (paramPage.pageSize) {
      newPage.pageSize = paramPage.pageSize;
    }
    newPage.pageNumber = newPage.current;
    reqParam.page = newPage;
    return request(this.props.url, {
      method: 'POST',
      data: reqParam,
    }).then((result) => {
      const { data = [], page = {}, mappData={} } = result.data || {};
      this.setState({
        loading: false,
        data,
        mappData,
        page: {
          total: page.total || 0,
          pageSize: page.pageSize || 20,
          current: page.pageNumber || 1,
        },
      });
    });
  };

  showTotal = (total) => {
    return `共 ${total} 条`;
  };

  changePageSize = (pageSize, current) => {
    const page = {
      pageSize,
      current,
    };
    this.setState({ page });
  };

  render() {
    const { data, page, loading } = this.state;
    const { columns =[] } = this.props ;
    const tableColumns = columns.filter((e) => e.listView || e.dataIndex =='option').map(element => {
      return {
        render: (value, record) => {
          if (element.dataType) {
            return ColumnRenderMap['mappData'](value, element.propKey, this.state.mappData);
          } else {
            return ColumnRenderMap['default'](value);
          }

        },
       ...element,
      };
    });
    return (
      <Table
        {...this.props}
        columns={tableColumns}
        rowKey={(record) => record.id}
        dataSource={data}
        scroll={{ x: 1500 }}
        pagination={{
          ...page,
          defaultCurrent: 1,
          showSizeChanger: true,
          showTotal: (total) => this.showTotal(total),
          onShowSizeChange: (current, pageSize) => this.changePageSize(pageSize, current),
        }}
        loading={loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default Grid;
