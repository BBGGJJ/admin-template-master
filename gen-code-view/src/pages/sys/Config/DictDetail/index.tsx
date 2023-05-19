import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Switch, message } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import { saveDictDetail, deleteDictDetail, updateDictDetail } from '@/services/sys/dictDetail';
import Suggest from '@/components/Suggest';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;

const defaultData = {
  valid: true,
  index: null,
  tableId: null,
  name: null,
  code: null,
}
const FunctList: React.FC = (props) => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: '关联字典',
      dataIndex: 'dictTableName',
      width: 150,
    },
    {
      title: '编码',
      dataIndex: 'code',
      width: 150,
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 150,

    },
    {
      title: '顺序',
      dataIndex: 'index',
      width: 150,

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
      dataIndex: 'valid',
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
              setIsEdit(true);
              setAddVisible(true);
              createForm.setFieldsValue(record);
            }}
          >
            编辑
          </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [load, setLoad] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState(defaultData);
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [form] = Form.useForm();
  const [createForm] = Form.useForm();
  const gridRef = useRef();
  const queryData = props.location.query || {};
  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
    setQueryFromData(formValue);
    gridRef.current.fetch(formValue)
  }
  const submitHeadel = async () => {
    if (valid && valid.length > 0) {
      setShowValidate(true);
    } else {
      if (isEdit) {
        const result = await updateDictDetail(rowData);
        message.success('更新成功！');
      } else {
        const result = await saveDictDetail(rowData);
        message.success('保存成功！');
      }
      setAddVisible(false);
      gridRef.current.fetch(queryFromData);
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
  const removeSubmit = async (record) => {
    const result = await deleteDictDetail(record.id);
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
  const dictTableResponse = (result) => {
    const data = result.data || [];
    return data.map(e => {
      return { value: e.id, label: e.dictName }
    })
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
          initialValues={queryData}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Space>
              <Form.Item name="tableId" label="关联字典">
                <Suggest url="/api/erp/boss/sys/dictTable/suggest.do" response={dictTableResponse} />
              </Form.Item>
              <Form.Item name="code" label="编码">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="name" label="名称">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="valid" label="状态">
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
        url="/api/erp/boss/sys/dictDetail/pageList.do"
        columns={columns}
        params={{}}
        queryParam={queryData}
        fetch={true}
        scroll={{ x: 1200 }}
      />
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setRowData(defaultData);
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
          <Form.Item label="关联字典"
            name="tableId"
            rules={[{ required: true, message: '关联字典不能为空' }]}
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
            name="code"
            label="编码"
            rules={[{ required: true, message: '编码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="名称"
            rules={[{ required: true, message: '名称' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="顺序"
            name="index"
            rules={[{ required: true, message: '请输入顺序' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="valid" label="状态" valuePropName="checked">
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>

  );

}

export default FunctList;
