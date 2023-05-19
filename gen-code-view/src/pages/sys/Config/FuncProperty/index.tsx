import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import EditForm from '@/components/ProTable/EditForm'
import Grid from '@/components/Grid';
import Suggest from '@/components/Suggest';
import { EnumsMapp } from '@/commons/enums';
import TagMap from '@/commons/TagMap';
import { history } from 'umi';
import { saveFuncProps, deleteFuncProps, updateFuncProps } from '@/services/sys/funcProps';

const { Option } = Select;
const { confirm } = Modal;
const { TextArea } = Input;

const genDynamicFormItem = (rowData) => {
  const result = [];
  const dataType = rowData.dataType || 0;
  if (!dataType) {
    result.push(
      <Form.Item
        name="viewType"
        label="表单类型"
        key="viewType"
        rules={[{ required: true, message: '请选择显示类型！' }]}
      >
        <Radio.Group options={EnumsMapp.funcViewTypeEnum} optionType="button" />
      </Form.Item>
    );
    if (rowData.viewType === 'input') {
      result.push(
        <Form.Item
          label="校验规则(正则)"
          name="regex"
          key="regex"
        >
          <Input />
        </Form.Item>);
      result.push(
        <Form.Item key="maxLength" name="maxLength" label="输入框maxLength" >
          <InputNumber min={0} max={1000} />
        </Form.Item>
      );
    }
  } else if (dataType === 2) {
    result.push(
      <Form.Item
        label="关联表名称"
        name="linkTableName"
        key="linkTableName"
        rules={[{ required: true, message: '请输入关联表名称' }]}
      >
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="tablePropField" name="tablePropField" label="关联属性key" rules={[{ required: true, message: '请输入关联属性key' }]}
      >
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="tableDescField" name="tableDescField" label="关联描述名称" rules={[{ required: true, message: '请输入关联描述名称' }]}>
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="tableQueryCondition" name="tableQueryCondition" label="关联查询条件" >
        <Input />
      </Form.Item>
    );
  } else if (dataType === 4) {
    result.push(
      <Form.Item
        label="查询url地址"
        name="linkUrl"
        key="linkUrl"
        rules={[{ required: true, message: '请输入查询url地址' }]}
      >
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="urlPropField" name="urlPropField" label="关联属性key" rules={[{ required: true, message: '请输入关联属性key' }]}>
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="urlDescField" name="urlDescField" label="关联描述名称" rules={[{ required: true, message: '请输入关联描述名称' }]}>
        <Input />
      </Form.Item>
    );
    result.push(
      <Form.Item key="urlParam" name="urlParam" label="关联查询参数" >
        <Input />
      </Form.Item>
    );
  } else if (dataType === 1) {
    result.push(
      <Form.Item key="enumData" name="enumData" label="枚举值" rules={[{ required: true, message: '请输枚举值{value:desc,value1:desc1}' }]}>
        <TextArea />
      </Form.Item>
    );
  } else if (dataType === 3) {
    result.push(
      <Form.Item key="dictName" name="dictName" label="字典编码" rules={[{ required: true, message: '请输字典编码' }]}>
        <Input />
      </Form.Item>
    );
  }
  return result;
}

const defaultData = {
  columnName: "",
  defaultValue: "",
  propName: "",
  propKey: "",
  enumData: "",
  dataType: 0,
  defaultValue: "",
  detailView: true,
  edit: true,
  create: true,
  enumData: "",
  index: 1,
  funcId: null,
  isValid: true,
  joinNext: false,
  listView: true,
  maxLength: 0,
  primaryKey: false,
  regex: "",
  required: true,
  searchView: true,
  valid: true
}
const TableList: React.FC = (props) => {
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
      render: TagMap['funcViewTypeEnum'],
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
      render: TagMap['funcDataTypeEnum'],
    },
    {
      title: '是否主键',
      dataIndex: 'primaryKey',
      width: 120,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '是否必填',
      dataIndex: 'required',
      width: 120,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '是否有效',
      dataIndex: 'isValid',
      width: 80,
      render: TagMap['validStatusEnum'],
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
              setIsEdit(true);
              setAddVisible(true);
              createForm.setFieldsValue(record);
            }}
          >
            编辑
                 </a>
          <a
            key={`delete${record.id || ''}`}
            onClick={() => {
              removeHadle(record);
            }}
          >
            删除
                 </a>
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              const query = { id: record.id };
              history.push({
                pathname: '/sys/Config/FuncProperty/detail',
                query
              });
            }}
          >{'详情'}
          </a>
        </Space>
      ),
    }
  ];
  const normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const removeSubmit = async (record) => {
    const result = await deleteFuncProps(record.id);
    gridRef.current.reload(queryFromData);
    message.success('删除成功');
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
  const [loading, setLoading] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState(defaultData);
  const [queryFromData, setQueryFromData] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [form] = Form.useForm();
  const [createForm] = Form.useForm();
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
      const result = await updateFuncProps(values);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        gridRef.current.fetch(queryFromData);
      }
    } else {
      const result = await saveFuncProps(values);
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
    setRowData(defaultData);
    createForm.setFieldsValue(defaultData);
    setIsEdit(false);
    setAddVisible(true);
    setShowValidate(false);
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const queryData = props.location.query || {};
  defaultData.funcId = queryData.funcId;
  const funcQueryForm = () => {
    return (
      <div className={styles.searchFormPanel}>
        <Form
          name="queryForm"
          form={form}
          initialValues={queryData}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Space>
              <Form.Item name="name" label="属性名称">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="code" label="属性编码">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="funcId" label="功能名">
                <Suggest placeholder="请输入功能名" url="/api/erp/boss/func/pageList.do" response={(resp) => {
                  const data = resp.data.data || [];
                  return data.map((e) => { return { key: e.id, value: e.id, label: e.name } });
                }} size="large" />
              </Form.Item>
              <Form.Item name="isValid" label="是否有效">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value={"true"}>有效</Option>
                  <Option value={"false"}>无效</Option>
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
        url="/api/erp/boss/funcProperty/pageList.do"
        columns={columns}
        fetch={true}
        queryParam={queryData}
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
          <Form.Item label="关联功能"
            name="funcId"
            rules={[{ required: true, message: '关联功能不能为空' }]}
          >
            <Suggest url="/api/erp/boss/func/pageList.do"
              response={(result) => {
                const data = result.data.data || [];
                return data.map((e) => {
                  return { key: e.id, value: e.id, label: e.name }
                })
              }}
            />
          </Form.Item>
          <Form.Item
            name="propName"
            label="属性名称"
            rules={[{ required: true, message: '请输入属性名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="propKey"
            label="属性编码"
            rules={[{ required: true, message: '请输入属性编码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="字段名"
            name="columnName"
            rules={[{ required: true, message: '请输入字段名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="required" label="是否必填" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="edit" label="是否可编辑" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="create" label="是否可新增" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="searchView" label="是否可搜索" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="detailView" label="详情页展示" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="listView" label="列表页展示" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="joinNext" label="是否关联下个属性" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
          <Form.Item name="primaryKey" label="是否为主键" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Form.Item>
          <Form.Item
            label="点击跳转链接"
            name="link"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="点击跳转参数名"
            name="linkParamName"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="dataType"
            label="值类型"
            rules={[{ required: true, message: '请选择值类型！' }]}
          >
            <Radio.Group options={EnumsMapp.funcDataTypeEnum} optionType="button" />
          </Form.Item>
          {genDynamicFormItem(rowData)}
          <Form.Item name="defaultValue" label="默认值" >
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
    </PageContainer >
  );

}

export default TableList;
