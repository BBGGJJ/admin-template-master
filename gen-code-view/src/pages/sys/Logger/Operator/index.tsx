import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { saveFunc, deleteFunc, updateFunc } from '@/services/sys/func';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';

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
      render: TagMap['operatorLogTypeEnum'],
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
                pathname: '/sys/Logger/Operator/Detail',
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
              <Form.Item name="appsourceId" label="关联系统">
                <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.id, label: `${e.name}(${e.appCode})` };
                  });
                }} />
              </Form.Item>
              <Form.Item name="bizType" label="业务类型">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="userId" label="操作用戶">
                <Suggest method="get" valueKey="userName" url="/api/sso/fuzzy/user" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.userId, label: `${e.userName}(${e.nickName})` };
                  });
                }} />
              </Form.Item>
              <Form.Item name="operatorType" label="操作类型">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value="true">有效</Option>
                  <Option value="false">无效</Option>
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
    <PageContainer>
      <Grid
        ref={gridRef}
        title={funcQueryForm}
        url="/api/operator/log/operatorLog/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        scroll={{ x: 1200 }}
      />
    </PageContainer>

  );

}

export default FunctList;
