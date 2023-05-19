import React, { useState, useCallback, useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import ProTable, { ProColumns, TableDropdown, ActionType } from '@ant-design/pro-table';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Suggest from '@/components/Suggest';
import request from '@/utils/request';
import { createGatewayRoute, updateGatewayRoute } from '@/services/sys/gatewayRoute';



const pageUrl = '/api/erp/boss/sys/gatewayRoute/pageList.do'

interface GithubIssueItem {
  id: number;
  parts: string;
  pattern: string;
  routeName: string;
  uri: string;
  valid: boolean;
  updateTime: string;
  createTime?: string;
}

const valueEnum = {
  0: {
    text: '无效',
    status: 'Error',
  },
  1: {
    text: '有效',
    status: 'Success',
  },
};

export default () => {
  const actionRef = useRef<ActionType>();
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [createForm] = Form.useForm();
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({});

  const submitHeadel = async (values) => {
    setLoading(true);
    values.valid = values.valid ? 1 : 0;
    const result = await createGatewayRoute(values);
    if (result.status == 200) {
      message.success('保存成功！');
      setAddVisible(false);
      actionRef.current.reload();
    }
    setLoading(false);
  }

  const saveSubmit = () => {
    createForm.validateFields()
      .then(values => {
        submitHeadel(values);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const onChangeStatus = async (valid, id) => {
    setLoading(true);
    await updateGatewayRoute({ id, valid: valid ? 1 : 0 });
    setLoading(false);
  }
  const columns: ProColumns<GithubIssueItem>[] = [
    {
      title: '唯一id',
      search: false,
      dataIndex: 'id',
      valueType: "digit",
    },
    {
      title: '去前缀',
      dataIndex: 'parts',
      valueType: "digit",
      step: 1,
      formatter: (value) => {
        return value;
      },
      parser: (value) => {
        return value;
      },
    },
    {
      title: 'route名称',
      dataIndex: 'routeName',
      valueType: "text",
    },
    {
      title: '匹配路径',
      dataIndex: 'pattern',
      valueType: "text",
    },
    {
      title: '转发地址',
      dataIndex: 'uri',
      valueType: "text",
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      search: false,
      valueType: 'dateTime',
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
      search: false,
      valueType: 'dateTime',
    },
    {
      title: '是否有效',
      dataIndex: 'valid',
      valueType: "switch",
      valueEnum,
      render: (text, record, index, action) => {
        return <Switch checkedChildren="有效" unCheckedChildren="无效" defaultChecked={record.valid} onChange={(status) => onChangeStatus(status, record.id)} />;
      }
    },
  ];

  return (
    <PageHeaderWrapper loading={loading}>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}) =>
          request<{
            data: GithubIssueItem[];
          }>(pageUrl, {
            method: 'POST',
            data: {
              page: {
                pageSize: params.pageSize,
                pageNumber: params.current,
              },
              ...params
            },
          }).then((result) => {
            const { data = [], page = {} } = result.data || {};
            return { data, page: page.pageNumber, total: page.total, success: true };
          })
        }
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} onClick={() => { setAddVisible(true) }} type="primary">
            新建
         </Button>
        ]}
      />
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setShowValidate(false);
          setAddVisible(false);
        }}
        width={1000}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          form={createForm}
          layout="horizontal"
          initialValues={rowData}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="id" hidden={true} shouldUpdate>
            <Input />
          </Form.Item>
          <Form.Item label="去前缀"
            name="parts"
            rules={[{ required: true, message: '去前缀不能为空' }]}
          >
            <InputNumber min={0} max={10} defaultValue={0} />
          </Form.Item>
          <Form.Item
            name="routeName"
            label="route名称"
            rules={[{ required: true, message: '请输入route名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="pattern"
            label="匹配路径"
            rules={[{ required: true, message: '请输入匹配路径' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="转发地址"
            name="uri"
            rules={[{ required: true, message: '请输入转发地址' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="isValid" label="是否有效" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
        </Form>
      </Modal>
    </PageHeaderWrapper>
  );
};
