import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Table, Input, Modal, Select, Radio, TreeSelect, Cascader, InputNumber, Switch, Slider, Checkbox, Rate, Upload, message } from 'antd';
import { CloseOutlined, CheckOutlined, UploadOutlined, InboxOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render/lib/antd';
import { deleteMsgTemplate, createMsgTemplate, updateMsgTemplate } from '@/services/sys/msgTemplate';
import Suggest from '@/components/Suggest';
import TagMap from '@/commons/TagMap';
import { EnumsMapp } from '@/commons/enums';

const { Option } = Select;
const { confirm } = Modal;
const { TextArea } = Input;

const defaultValue = {
  appName: null,
  bizType: null,
  channel: "mgsDefault",
  isTemplate: true,
  sendType: null,
  status: true,
  template: null,
  weight: 0,
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
      title: '关联系统',
      dataIndex: 'appName',
      width: 150,
    },
    {
      title: '业务类型编码',
      dataIndex: 'bizType',
      width: 150,
    },
    {
      title: '是否模板发送',
      dataIndex: 'isTemplate',
      width: 150,
      render: TagMap['yesnoStatusEnum'],
    },
    {
      title: '发送渠道',
      dataIndex: 'channel',
      width: 150,

    },
    {
      title: '权重',
      dataIndex: 'weight',
      width: 120,
    },
    {
      title: '模板内容',
      dataIndex: 'template',
      width: 300,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 80,
      render: TagMap['validStatusEnum'],
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 150,
    },
    {
      title: '修改时间',
      dataIndex: 'updateTime',
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
        </Space>
      ),
    }
  ];

  const [loading, setLoading] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState(defaultValue);
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

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
      const result = await updateMsgTemplate(values);
      if (result.status == 200) {
        message.success('更新成功！');
        setAddVisible(false);
        gridRef.current.fetch(queryFromData);
      }
    } else {
      const result = await createMsgTemplate(values);
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
    setAddVisible(true);
    setShowValidate(false);
  }


  const removeSubmit = async (record) => {
    const result = await deleteMsgTemplate(record.id);
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
              <Form.Item name="appName" label="关联系统">
                <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.appCode, label: `${e.name}(${e.appCode})` };
                  });
                }} />
              </Form.Item>
              <Form.Item name="bizType" label="业务类型编码">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="isTemplate" label="是否模板发送">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value="true">是</Option>
                  <Option value="false">否</Option>
                </Select>
              </Form.Item>
              <Form.Item name="status" label="模板状态">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  <Option value="true">有效</Option>
                  <Option value="false">无效</Option>
                </Select>
              </Form.Item>
              <Form.Item name="channel" label="发送渠道">
                <Select
                  allowClear
                  style={{ width: 200 }}
                  placeholder="请选择"
                >
                  {EnumsMapp.messageChannel.map(e => <Option value={e.value}>{e.label}</Option>)}
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
        url="/api/erp/sms/msgTemplate/pageList.do"
        columns={columns}
        params={{}}
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
          <Form.Item name="appName" label="关联系统" rules={[{ required: true, message: '关联系统必填' }]}>
            <Suggest method="POST" valueKey="suggest" url="/api/erp/boss/sys/appsource/suggest.do" response={(resp) => {
              const { data = [] } = resp;
              return data.map((e) => {
                return { value: e.appCode, label: `${e.name}(${e.appCode})` };
              });
            }} />
          </Form.Item>
          <Form.Item name="bizType" label="业务类型编码" rules={[{ required: true, message: '业务类型编码必填' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item name="isTemplate" label="是否模板发送" rules={[{ required: true, message: '请选择是否模板发送' }]}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="status" label="模板状态" valuePropName="checked" rules={[{ required: true, message: '请选择状态' }]}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked />
          </Form.Item>
          <Form.Item name="channel" label="发送渠道" rules={[{ required: true, message: '请选择发送渠道' }]}>
            <Radio.Group options={EnumsMapp.messageChannel} optionType="button" />
          </Form.Item>
          <Form.Item name="weight" label="权重" rules={[{ required: true, message: '请填写权重' }]}>
            <InputNumber min={0} max={10} defaultValue={0} />
          </Form.Item>
          {rowData.isTemplate ?
            <Form.Item name="template" label="模板内容" rules={[{ required: true, message: '请填写模板内容' }]}>
              <TextArea placeholder="请输入" />
            </Form.Item>
            :
            ''
          }
        </Form>
      </Modal>
    </PageContainer>

  );

}

export default FunctList;
