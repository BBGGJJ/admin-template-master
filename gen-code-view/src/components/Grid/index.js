import React from 'react';
import { Table } from 'antd';
import request from '@/utils/request';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: {
        pageNumber: 1,
        pageSize: 20,
        total: 0,
      },
      params: props.params || {},
      fetch: props.fetch,
      loading: false,
    };
  }

  componentDidMount() {
    const { page,params={},fetch } = this.state;
    if(fetch){
      this.fetch({ page,...params });
    }
  }

  handleTableChange = (page, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...this.state.params,
      page:{
        total: page.total || 0,
        pageSize: page.pageSize || 20,
        pageNumber: page.current || 1,
      },
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
    const reqParam = {...(this.props.queryParam || {}),...params };
    const paramPage = params.page || {};
    const newPage = Object.assign({}, this.state.page);
    if (paramPage.pageSize) {
      newPage.pageSize = paramPage.pageSize;
    }
    if (paramPage.pageNumber) {
      newPage.pageNumber = paramPage.pageNumber;
    }
    reqParam.page = newPage;
    return request(this.props.url, {
      method: 'POST',
      data: reqParam,
    }).then((result) => {
      const { data = [], page = {} } = (result || {}).data || {};
      this.setState({
        loading: false,
        data,
        page: {
          total: page.total || 0,
          pageSize: page.pageSize || 20,
          pageNumber: page.pageNumber || 1,
        },
      });
    }).catch((error) => {
      console.log(error);
    });
  };

  showTotal = (total) => {
    return `共 ${total} 条`;
  };

  changePageSize = (pageSize, current) => {
    const page = {
      pageSize,
      pageNumber: current,
    };
    this.setState({ page });
  };

  render() {
    const { data, page, loading } = this.state;
    const { columns =[] } = this.props ;
    const tableColumns = columns.filter((e) => !e.hideTable);
    return (
      <Table
        {...this.props}
        columns={tableColumns}
        rowKey={(record) => record.id}
        dataSource={data}
        scroll={{ x: 1500 }}
        pagination={{
          ...page,
          current:page.pageNumber,
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
