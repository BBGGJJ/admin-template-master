import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col, Space, Input, Modal, Select, message,Table } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender from 'form-render';
import { saveAppsource, deleteAppsource, updateAppsource } from '@/services/sys/appsource';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { EnumsMapp } from '@/commons/enums';
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
      title: '系统名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '系统编码',
      dataIndex: 'appCode',
      width: 150,
    },
    {
      title: '分组',
      dataIndex: 'group',
      width: 80,
      render: TagMap['appsourceGroupEnum'],
    },
    {
      title: '系统状态',
      dataIndex: 'status',
      width: 100,
      render: TagMap['validStatusEnum'],
    },
    {
      title: '创建人',
      dataIndex: 'createBy',
      width: 100,
    },
    {
      title: '系统标识',
      dataIndex: 'token',
      width: 350,
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
      title: '系统说明',
      dataIndex: 'desc',
      width: 200,
    },
    {
      title: '操作',
      dataIndex: 'option',
      fixed: 'right',
      width: 150,
      valueType: 'option',
      render: (_, record) => (
        <Space>
          <a
            key={`edit${record.id || ''}`}
            onClick={() => {
              setRowData(record);
              setIsEdit(true);
              setAddVisible(true);
            }}
          >
            编辑
          </a>
          <a
            key={`view${record.id || ''}`}
            onClick={() => {
              const query = {id: record.id};
              history.push({
                pathname: '/sys/Config/Appsource/Detail',
                query
              });
            }}
          >
            人员分配
          </a>
        </Space>
      ),
    }
  ];
  const schema = {
    "type": "object",
    "properties": {
      "id": {
        "type": "hidden",
        "ui:widget": "hidden",
      },
      "name": {
        "title": "系统名称",
        "type": "string",
      },
      "appCode": {
        "title": "系统编码",
        "type": "string",
        "ui:width": "100%",
        "ui:options": {}
      },
      "group": {
        "title": "分组",
        "type": "string",
        "enum": EnumsMapp.appsourceGroup.map(e => e.value),
        "enumNames": EnumsMapp.appsourceGroup.map(e => e.label),
      },
      "status": {
        "title": "状态",
        "type": "boolean",
        "ui:widget": "switch",
        "default": ""
      },
      "desc": {
        "title": "系统说明",
        "type": "string",
        "ui:widget": "textarea",
        "default": ""
      }
    },
    "required": [
      "name",
      "appCode",
      "group",
      "status"
    ]
  }
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({});
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);

  const [form] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    setQueryFromData(formValue);
    gridRef.current.fetch(formValue)
  }
  const saveSubmit = async () => {
    if (valid && valid.length > 0) {
      setShowValidate(true);
    } else {
      if (isEdit) {
        const result = await updateAppsource(rowData);
        message.success('更新成功！');
      } else {
        const result = await saveAppsource(rowData);
        message.success('保存成功！');
      }
      setAddVisible(false);
      gridRef.current.fetch(queryFromData);
    }
  }
  const clickAdd = () => {
    setRowData({});
    setIsEdit(false);
    setAddVisible(true);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteAppsource(record.id);
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
  const funcQueryForm = () => {
    return (
      <div className="searchFormPanel">
        <Form
          name="queryForm"
          form={form}
          className="ant-advanced-search-form"
        >
          <Row gutter={24}>
            <Space>
              <Form.Item name="name" label="系統名">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="appCode" label="系統编码">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="group" label="分组">
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
        url="/api/erp/boss/sys/appsource/pageList.do"
        columns={columns}
        params={{}}
        fetch={true}
        size="small"
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
        <FormRender
          schema={schema}
          showValidate={showValidate}
          formData={rowData}
          onChange={setRowData}
          onValidate={setValid}
          displayType="row" // 详细配置见下
        />
      </Modal>
    </PageContainer>

  );

}

export default FunctList;
