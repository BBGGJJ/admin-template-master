import React, { useState, useCallback, useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import ProTable, { ProColumns, TableDropdown, ActionType } from '@ant-design/pro-table';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Suggest from '@/components/Suggest';
import request from '@/utils/request';
import { createErrorToast, updateErrorToast } from '@/services/sys/errorToast';

const { Option } = Select;

const pageUrl = '/api/erp/boss/sys/errorToastConf/pageList.do'

interface GithubIssueItem {
  id: number;
  bizCode: string;
  errorMessageType: string;
  messageCode: string;
  errorMessage: string;
  remark: string;
  status: boolean;
  updateTime: string;
  createTime?: string;
}
const defaultValue = {
  id: "",
  bizCode: "",
  errorMessageType: "",
  messageCode: "",
  errorMessage: "",
  remark: "",
  status: true,
  updateTime: "",
  createTime: "",
}
const valueEnum = {
  "info": {
    text: '默认',
    status: 'Default',
  },
  "success": {
    text: '成功',
    status: 'Success',
  },
  "error": {
    text: '错误',
    status: 'Error',
  },
  "warning": {
    text: '警告',
    status: 'Warning',
  },
  "loading": {
    text: '执行',
    status: 'Processing',
  },
};
export default (props) => {
  const actionRef = useRef<ActionType>();
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [createForm] = Form.useForm();
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({});
  const { bizCode } = props;
  const submitHeadel = async (values) => {
    values.bizCode = bizCode;
    setLoading(true);
    let result;
    if (isEdit) {
      result = await updateErrorToast(values);
    } else {
      result = await createErrorToast(values);
    }
    if (result.status == 200) {
      message.success('保存成功！');
      setAddVisible(false);
      if (actionRef.current) {
        actionRef.current.reload();
      }
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
    await updateErrorToast({ id, status: valid });
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
      title: '提示类型',
      dataIndex: 'errorMessageType',
      valueType: "text",
      valueEnum,
    },
    {
      title: '编码',
      dataIndex: 'messageCode',
      valueType: "text",
    },
    {
      title: '内容',
      dataIndex: 'errorMessage',
      valueType: "text",
      search: false,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      valueType: "text",
      search: false,
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
      dataIndex: 'status',
      valueType: "select",
      render: (text, record, index, action) => {
        return <span style={{ "width": "100px" }} ><Switch checkedChildren="有效" unCheckedChildren="无效" defaultChecked={record.status} onChange={(status) => onChangeStatus(status, record.id)} /></span>;
      },
      // renderFormItem:(text, record, index, action) => {
      //   return <span style={{"width":"100px"}} ><Switch checkedChildren="有效" unCheckedChildren="无效"  defaultChecked={record.valid} onChange={(status) => onChangeStatus(status, record.id)} /></span>;
      // },
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
            key={`edit${record.id || ''}`}
            onClick={() => {
              setRowData(record);
              createForm.setFieldsValue(record);
              setIsEdit(true);
              setAddVisible(true);
            }}
          >
            编辑
       </a>
        </Space>
      ),
    }
  ];

  return (
    <div>
      <ProTable<GithubIssueItem>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}) =>
          request<{
            data: GithubIssueItem[];
          }>(pageUrl, {
            method: 'POST',
            data: {
              bizCode: bizCode,
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
          <Button key="button" icon={<PlusOutlined />} onClick={() => { setAddVisible(true); setRowData(defaultValue);createForm.setFieldsValue(defaultValue); }} type="primary">
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
          <Form.Item
            name="errorMessageType"
            label="提示类型"
            rules={[{ required: true, message: '请输入提示类型' }]}
          >
            <Select style={{ width: 120 }}>
              {Object.keys(valueEnum).map(e => <Option value={e}>{valueEnum[e].text}</Option>)}
            </Select>
          </Form.Item>

          <Form.Item
            name="messageCode"
            label="编码"
            rules={[{ required: true, message: '请输入编码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="提示类容"
            name="errorMessage"
            rules={[{ required: true, message: '请输入提示类容' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="备注"
            name="remark"
          >
            <Input />
          </Form.Item>
          <Form.Item name="status" label="是否有效" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
