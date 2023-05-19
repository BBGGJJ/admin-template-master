import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Table, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { createUriWhiteList, deleteUriWhiteList, updateUriWhiteList } from '@/services/sys/whiteList/loginUrl';
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
      title: '系统编码(英文名称)',
      dataIndex: 'appCode',
      width: 150,
    },
    {
      title: '系统名称',
      dataIndex: 'appName',
      width: 150,

    },
    {
      title: '白名单路径',
      dataIndex: 'excludeUri',
      width: 150,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 120,
      render: (value, record) => <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={value} onChange={(status) => onChangeStatus(status, record.id)} />,
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
      title: '备注',
      dataIndex: 'desc',
      width: 150,
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
            key={`delete${record.id || ''}`}
            onClick={() => {
              removeHadle(record);
              gridRef.current.reload();
            }}
          >
            删除
           </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({});
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
    const result = await createUriWhiteList(values);
    if (result.status == 200) {
      message.success('保存成功！');
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
    setRowData({});
    setAddVisible(true);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteUriWhiteList(record.id);
    if (result.status == 200) {
      message.success('删除成功');
      gridRef.current.fetch(queryFromData);
    }
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
  const onChangeStatus = async (status, id) => {
    await updateUriWhiteList({ id, status });
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
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
              <Form.Item name="appId" label="关联系统">
                <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.id, label: `${e.name}(${e.appCode})` };
                  });
                }} />
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
        url="/api/sso/uriWhiteList/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        scroll={{ x: 1200, y: 300 }}
      />
      <Modal
        title={'新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setRowData({});
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
          <Form.Item name="appId" label="关联系统" rules={[{ required: true, message: '关联系统必填' }]}>
            <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
              const { data = [] } = resp;
              return data.map((e) => {
                return { value: e.id, label: `${e.name}(${e.appCode})` };
              });
            }} />
          </Form.Item>
          <Form.Item name="status" label="状态" valuePropName="checked" rules={[{ required: true, message: '请选择状态' }]}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="excludeUri" label="url路徑" rules={[{ required: true, message: 'url路徑必填' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="desc" label="備注">
            <Input placeholder="请输入" />
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>

  );

}

export default FunctList;
