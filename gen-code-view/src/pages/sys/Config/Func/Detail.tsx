import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Card, Collapse, Descriptions, Divider } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import { detailsFunc } from '@/services/sys/func';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { confirm } = Modal;
const { Panel } = Collapse;

const FunctDetail: React.FC = (props) => {
  const [rowData, setRowData] = useState({});
  const [load, setLoad] = useState(false);
  const queryParams = props.location.query;
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: '功能名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '功能编码',
      dataIndex: 'code',
      width: 150,
    },
    {
      title: '表名称',
      dataIndex: 'tableName',
      width: 150,
    },
    {
      title: '是否可以新增',
      dataIndex: 'isCreate',
      width: 120,
    },
    {
      title: '是否可以编辑',
      dataIndex: 'isEdit',
      width: 120,
    },
    {
      title: '是否可以查看详情',
      dataIndex: 'isDetail',
      width: 150,
    },
    {
      title: '是否可以删除',
      dataIndex: 'isDelete',
      width: 120,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 200,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 80,
    }
  ];

  useEffect(() => {
    async function fetchData() {
      const result = (await detailsFunc(queryParams.id)) || {};
      setRowData(result.data || {})
    }
    fetchData();
  }, [load]);
  const returnPrev = () => {
    return (
      <Button type="primary" onClick={() => {
        history.goBack();
      }}> {'<< 返回'}</Button>
    )
  }
  return (
    <PageContainer title="功能详情">
      <Card>
        <Descriptions title="功能详情" extra={returnPrev()} bordered>
          {columns.map((e, index) => (
            <Descriptions.Item key={index} label={e.title}>{rowData[e.dataIndex] || ''}</Descriptions.Item>
          ))}
        </Descriptions>
      </Card>
      <Divider />
    </PageContainer>
  );
}
export default FunctDetail;
