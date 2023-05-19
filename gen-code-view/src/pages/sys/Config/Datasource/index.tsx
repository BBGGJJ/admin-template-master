import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Tag, Space, DatePicker, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, Drawer, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import ProTable, { ProColumns, TableDropdown, ActionType } from '@ant-design/pro-table';
import { saveDatasource, deleteDatasource, updateDatasource } from '@/services/sys/datasource';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined, PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';
import request from '@/utils/request';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;
const { TextArea } = Input;

const pageUrl = '/api/erp/boss/sys/dataSource/pageList.do'

interface DataTaskItem {

  createTime: string;
  datebaseType: number;
  driver: string;
  id: number;
  password: string;
  remark: string;
  sourceName: string; string;
  updateTime: string;
  url: string;
  userName: string;
}

const defaultValue = {
  createTime: null,
  datebaseType: 1,
  driver: "com.mysql.cj.jdbc.Driver",
  id: null,
  password: null,
  remark: null,
  sourceName: null,
  updateTime: null,
  url: "jdbc:mysql://192.168.5.120:3306/report?characterEncoding=utf8&serverTimezone=GMT%2B8",
  userName: null,
}
const valueEnum = {
  1: {
    text: 'MySql',
    status: 'success',
  },
  2: {
    text: 'Oeacle',
    status: 'Processing',
  },
  3: {
    text: 'postersql',
    status: 'default',
  },
};
const FunctList: React.FC = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
      search: false,
    },
    {
      title: '数据库类型',
      dataIndex: 'datebaseType',
      width: 150,
      render: TagMap['dataSourceTypeEnum'],
      valueEnum,
    },
    {
      title: '名称',
      dataIndex: 'sourceName',
      width: 150,
    },
    {
      title: '链接字符串',
      dataIndex: 'url',
      width: 150,
      search: false,
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      width: 120,
      search: false,
    },
    {
      title: '密码',
      dataIndex: 'password',
      width: 120,
      search: false,
    },
    {
      title: '驱动名',
      dataIndex: 'driver',
      width: 120,
      search: false,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 120,
      search: false,
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
              setReadOnly(false);
              setAddVisible(true);
            }}
          >
            编辑
              </a>
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              setRowData(record);
              createForm.setFieldsValue(record);
              setIsEdit(false);
              setReadOnly(true);
              setAddVisible(true);
            }}
          >
            详情
              </a>
        </Space>
      ),
    }
  ];

  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState(defaultValue);
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [createForm] = Form.useForm();
  const [form] = Form.useForm();
  const actionRef = useRef<ActionType>();
  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
    setQueryFromData(formValue);
    actionRef.current.reload();
  }
  const submitHeadel = async (values) => {
    if (isEdit) {
      const result = await updateDatasource(values);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        actionRef.current.reload();
      }
    } else {
      const result = await saveDatasource(values);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        actionRef.current.reload();
      }
    }
  }
  const saveSubmit = () => {
    createForm.validateFields()
      .then(values => {
        submitHeadel(values);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const clickAdd = () => {
    setRowData(defaultValue);
    createForm.setFieldsValue(defaultValue);
    setIsEdit(false);
    setAddVisible(true);
    setReadOnly(false);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteDatasource(record.id);
    message.success('删除成功');
    actionRef.current.reload();
  }
  const removeHadle = (record) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定删除数据？',
      onOk() {
        removeSubmit(record);
      },
      okText: '确定',
      cancelText: '取消',
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const onChange = (value) => {
    setRowData({ ...rowData, querySql: value });
  }
  return (
    <PageContainer loading={loading}>
      <ProTable<DataTaskItem>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}) =>
          request<{
            data: WorkRoleItem[];
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
            return { data, page: page.pageNumber, pageSize: page.pageSize, total: page.total, success: true };
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
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} onClick={() => { setAddVisible(true) }} type="primary">
            新建
       </Button>
        ]}
      />
      <Drawer
        title={isEdit ? '编辑对象' : '新增对象'}
        width='50%'
        forceRender={true}
        visible={addVisible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={
              () => {
                setRowData(defaultValue);
                createForm.setFieldsValue(defaultValue);
                setShowValidate(false);
                setAddVisible(false);
              }
            } style={{ marginRight: 8 }}>
              取消
           </Button>
            {!readOnly ?
              <Button onClick={saveSubmit} type="primary">
                保存
            </Button>
              : ''}
          </div>
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          form={createForm}
          layout="horizontal"
          initialValues={defaultValue}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="id" hidden={true} shouldUpdate>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item
            name="datebaseType"
            label="数据库类型"
            rules={[{ required: true, message: '请选择数据库类型' }]}
          >
            <Radio.Group buttonStyle="solid" disabled={readOnly}>
              <Radio.Button value={1}>MySql</Radio.Button>
              <Radio.Button value={2}>Oracle</Radio.Button>
              <Radio.Button value={3}>postersql</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="sourceName" label="名称" shouldUpdate rules={[{ required: true, message: '请输入名称' }]}>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item name="url" label="链接字符串" shouldUpdate rules={[{ required: true, message: '请输入链接字符串' }]}>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item name="userName" label="用户名" shouldUpdate rules={[{ required: true, message: '请输入用户名' }]}>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item name="password" label="密码" shouldUpdate rules={[{ required: true, message: '请输入密码' }]}>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item name="driver" label="驱动名" shouldUpdate rules={[{ required: true, message: '请输入驱动名' }]}>
            <Input disabled={readOnly} />
          </Form.Item>
          <Form.Item name="remark" label="备注" shouldUpdate>
            <TextArea rows={4} disabled={readOnly} />
          </Form.Item>
        </Form >
      </Drawer >
    </PageContainer >

  );

}

export default FunctList;
