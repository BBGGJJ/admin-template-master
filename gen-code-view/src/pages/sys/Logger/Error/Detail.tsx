import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Card, Collapse, Descriptions, Divider } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { fetchDetail } from '@/services/sys/errorLog';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-terminal";

import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { confirm } = Modal;
const { Panel } = Collapse;
const columns = [
  {
    title: '唯一标识',
    dataIndex: 'id',
  },
  {
    title: '系统',
    dataIndex: 'appsourceName',
  },
  {
    title: '异常类型',
    dataIndex: 'errorType',
  },
  {
    title: '唯一标识符',
    dataIndex: 'uuid',
  },
  {
    title: '服务器地址',
    dataIndex: 'host',
  },
  {
    title: '状态',
    dataIndex: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    hideInForm: true,
    hideInSearch: true,
    valueType: 'dateTime',
  }
]
const FunctDetail: React.FC = (props) => {
  const [rowData, setRowData] = useState({});
  const [load, setLoad] = useState(true);
  const queryParams = props.location.query;
  useEffect(() => {
    async function fetchData() {
      const result = await fetchDetail(queryParams.id);
      setRowData(result.data)
    }
    fetchData();
  },[load]);
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
        <AceEditor
          mode="mysql"
          theme="xcode"
          width="100%"
          readOnly={true}
          value={rowData.message || ''}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
      </Card>
    </PageContainer>
  );
}
export default FunctDetail;
