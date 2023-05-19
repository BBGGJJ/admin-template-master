import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Card, Collapse, Descriptions, Divider } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { fetchDetail } from '@/services/sys/operatorLog';

import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { confirm } = Modal;
const { Panel } = Collapse;
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 80,
    fixed: 'left',
  },
  {
    title: '來源',
    dataIndex: 'source',
    width: 150,
  },
  {
    title: '关联系统',
    dataIndex: 'appsourceName',
    width: 150,
  },
  {
    title: '业务类型',
    dataIndex: 'bizType',
    width: 150,

  },
  {
    title: '用户id',
    dataIndex: 'userId',
    width: 150,

  },
  {
    title: '操作类型',
    dataIndex: 'operatorType',
    width: 120,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 200,
  }
]
const FunctDetail: React.FC = (props) => {
  const [rowData, setRowData] = useState({});
  const queryParams = props.location.query;
  useEffect(() => {
    async function fetchData() {
      const result = await fetchDetail(queryParams.id);
      setRowData(result.data)
    }
    fetchData();
  });
  const returnPrev = () => {
    return (
      <Button type="primary" onClick={() => {
        history.goBack();
      }}> {'<< 返回'}</Button>
    )
  }
  return (
    <PageContainer title="错误详情">
      <Card>
        <Descriptions title="功能详情" extra={returnPrev()} bordered>
          {columns.map((e, index) => (
            <Descriptions.Item key={index} label={e.title}>{rowData[e.dataIndex] || ''}</Descriptions.Item>
          ))}
        </Descriptions>
      </Card>
      <Divider />
      <Card>
        {rowData.message || ''}
      </Card>
    </PageContainer>
  );
}
export default FunctDetail;
