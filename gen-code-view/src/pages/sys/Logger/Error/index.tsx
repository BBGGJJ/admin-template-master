import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;
const FunctList: React.FC = () => {

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
      title: '异常内容',
      dataIndex: 'message',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      hideInForm: true,
      hideInSearch: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      fixed: 'right',
      width: 250,
      valueType: 'option',
      render: (_, record) => (
        <Space>
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              const query = { id: record.id };
              history.push({
                pathname: '/sys/Logger/Error/Detail',
                query
              });
            }}
          >
            详情
          </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [queryFromData, setQueryFromData] = useState({});
  const [form] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
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
              <Form.Item name="appId" label="关联系统">
                <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.id, label: `${e.name}(${e.appCode})` };
                  });
                }} />
              </Form.Item>
              <Form.Item name="errorType" label="异常类型">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="uuid" label="唯一标识">
                <Input placeholder="请输入" />
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
    <PageContainer>
      <Grid
        ref={gridRef}
        title={funcQueryForm}
        url="/api/operator/log/systemErrorLog/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        scroll={{ x: 1200 }}
      />
    </PageContainer>

  );

}

export default FunctList;
