import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import { saveFunc, deleteFunc, updateFunc } from '@/services/sys/func';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';


import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;

const defaultValue = {
  code: null,
  dataSourceId: null,
  isCreate: true,
  isDelete: true,
  isDetail: true,
  isEdit: true,
  name: null,
  status: true,
  tableName: null,
}
const FunctList: React.FC = () => {

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
      title: '数据源',
      dataIndex: 'dataSourceName',
      width: 150,
    },
    {
      title: '是否可以新增',
      dataIndex: 'isCreate',
      width: 120,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '是否可以编辑',
      dataIndex: 'isEdit',
      width: 120,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '是否可以查看详情',
      dataIndex: 'isDetail',
      width: 150,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '是否可以删除',
      dataIndex: 'isDelete',
      width: 120,
      render: TagMap['yesnoStatusEnum'],
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
      render: TagMap['validStatusEnum'],
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
          <a
            key={`delete${record.id || ''}`}
            onClick={() => {
              removeHadle(record);
              gridRef.current.reload();
            }}
          >
            删除
               </a>
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              const query = { id: record.id };
              history.push({
                pathname: '/sys/Config/Func/Detail',
                query
              });
            }}
          >
            详情
               </a>
          <a
            key={`detail${record.id || ''}`}
            onClick={() => {
              const query = { funcId: record.id };
              history.push({
                pathname: '/sys/Config/FuncProperty',
                query
              });
            }}
          >
            属性配置
              </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState(defaultValue);
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [createForm] = Form.useForm();
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
  const submitHeadel = async (values) => {
    if (isEdit) {
      const result = await updateFunc(values);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        gridRef.current.fetch(queryFromData);
      }
    } else {
      const result = await saveFunc(values);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        gridRef.current.fetch(queryFromData);
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
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteFunc(record.id);
    message.success('删除成功');
    gridRef.current.fetch(queryFromData);
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
  const funcQueryForm = () => {
    return (
      <div className={styles.searchFormPanel}>
        <Form
          name="queryForm"
          form={form}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Space>
              <Form.Item name="name" label="功能名">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="code" label="功能编码">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="tableName" label="表名称">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="status" label="状态">
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
                <Button
                  type="primary"
                  key="itemResetBtn"
                  onClick={() => clickAdd()}
                >
                  新增
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
        url="/api/erp/boss/func/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        scroll={{ x: 1200, y: 300 }}
      />
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setRowData(defaultValue);
          createForm.setFieldsValue(defaultValue);
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
          <Form.Item label="功能名称"
            name="name"
            rules={[{ required: true, message: '功能名称不能为空' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="code"
            label="功能编码"
            rules={[{ required: true, message: '请输入功能编码' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="tableName"
            label="表名称"
            rules={[{ required: true, message: '请输入表名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="是否可以新增"
            name="isCreate"
            rules={[{ required: true, message: '请输入是否可以新增' }]}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="isEdit" label="是否可以编辑">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="isDetail" label="是否可以查看详情" >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="isDelete" label="是否可以删除" >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="status" label="状态" >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="dataSourceId" label="数据源" rules={[{ required: true, message: '请输入数据源' }]}>
            <Suggest url="/api/erp/boss/sys/dataSource/pageList.do"
              response={(result) => {
                const data = result.data.data || [];
                return data.map((e) => {
                  return { key: e.id, value: e.id, label: e.sourceName }
                })
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer >

  );

}

export default FunctList;
