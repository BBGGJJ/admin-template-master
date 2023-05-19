import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { saveFunc, deleteFunc, updateFunc } from '@/services/sys/func';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;


const FunctList: React.FC = () => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: '通知类型',
      dataIndex: 'notifyType',
      width: 150,
      render: TagMap['messageNotifyTypeEnum'],
    },
    {
      title: '消息参数',
      dataIndex: 'params',
      width: 150,
    },
    {
      title: '模板id',
      dataIndex: 'templateId',
      width: 150,

    },
    {
      title: '业务编码',
      dataIndex: 'bizNum',
      width: 150,

    },
    {
      title: '接收人',
      dataIndex: 'contacts',
      width: 120,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 80,
      render: TagMap['messageStatusEnum'],
    },
    {
      title: '通知时间',
      dataIndex: 'notifyTime',
      width: 120,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 120,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      width: 120,
    },
  ];
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState({});
  const [queryFromData, setQueryFromData] = useState({});
  const [form] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
    setQueryFromData(formValue);
    gridRef.current.fetch(formValue)
  }
  const funcQueryForm = () => {
    return (
      <div class="searchFormPanel">
        <Form
          name="queryForm"
          form={form}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Space>
              <Form.Item name="notifyType" label="通知类型">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value="1">立即发送</Option>
                  <Option value="2">延时发送</Option>
                </Select>
              </Form.Item>
              <Form.Item name="bizNum" label="业务编码">
                <Input allowClear placeholder="请输入" />
              </Form.Item>
              <Form.Item name="templateId" label="模板id">
                <Input allowClear placeholder="请输入" />
              </Form.Item>
              <Form.Item name="status" label="状态">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value="1">待发送</Option>
                  <Option value="2">已发送</Option>
                </Select>
              </Form.Item>
            </Space>
          </Row>
          <Row gutter={24}>
            <Col
              span={24}
              style={{
                textAlign: 'right',
              }}
            >
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  key="itemQueryBtn"
                  onClick={() => {
                    onQuerySubmit(form.getFieldValue());
                  }}
                >
                  查询
                </Button>
                <Button
                  type="primary"
                  key="itemResetBtn"
                  onClick={() => {
                    form.resetFields();
                  }}
                >重置
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
  return (
    <PageContainer loading={loading}>
      <Grid
        ref={gridRef}
        title={funcQueryForm}
        url="/api/erp/sms/message/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        scroll={{ x: 1200 }}
      />
    </PageContainer>
  );

}

export default FunctList;
