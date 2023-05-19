import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Card, Collapse, Descriptions, Divider } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import { detailsFuncProps } from '@/services/sys/funcProps';

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
    hidden: true,
  },
  {
    title: '功能id',
    dataIndex: 'funcId',
    width: 150,
  },
  {
    title: '属性名称',
    dataIndex: 'propName',
    width: 150,
    valueType: 'suggest',
  },
  {
    title: '属性编码',
    dataIndex: 'propKey',
    width: 150,
  },
  {
    title: '字段名',
    dataIndex: 'columnName',
    width: 120,
  },
  {
    title: '显示类型',
    dataIndex: 'viewType',
    width: 120,
  },
  {
    title: '默认值',
    dataIndex: 'defaultValue',
    width: 150,
  },
  {
    title: '显示顺序',
    dataIndex: 'index',
    width: 120,
  },
  {
    title: '值类型',
    dataIndex: 'dataType',
    width: 120,
  },
  {
    title: '是否主键',
    dataIndex: 'primaryKey',
    width: 120,
  },
  {
    title: '是否必填',
    dataIndex: 'required',
    width: 120,
  },
  {
    title: '是否有效',
    dataIndex: 'isValid',
    width: 80,
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
]
const FunctDetail: React.FC = (props) => {
  const [rowData, setRowData] = useState({});
  const [load, setLoad] = useState(false);
  const queryParams = props.location.query;
  useEffect(() => {
    async function fetchData() {
      const result = await detailsFuncProps(queryParams.id);
      setRowData(result.data)
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
    <PageContainer title="功能属性详情">
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
