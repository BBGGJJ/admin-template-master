import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender, { useForm } from 'form-render';
import { saveDictTable, deleteDictTable, updateDictTable } from '@/services/sys/dictTable';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;

const defaultData = {
  status: true,
};

const FunctList: React.FC = () => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: '字典名称',
      dataIndex: 'dictName',
      width: 150,
    },
    {
      title: '字典编码',
      dataIndex: 'code',
      width: 150,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      width: 150,

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
            }}
          >
            编辑
          </a>
          <a
            key={`detail${record.id || ''}`}
            onClick={() => {
              const query = { tableId: record.id };
              history.push({
                pathname: '/sys/Config/DictDetail',
                query
              });
            }}
          >
            字典详情配置
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
      "dictName": {
        "title": "字典名称",
        "type": "string",
      },
      "code": {
        "title": "字典编码",
        "type": "string",
        "ui:width": "100%",
        "ui:options": {}
      },
      "status": {
        "title": "状态",
        "type": "string",
        "ui:widget": "switch",
      },
      "desc": {
        "title": "描述",
        "type": "string",
        "ui:widget": "TextArea",
      }
    },
    "required": [
      "dictName",
      "code",
      "status",
    ]
  }
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({ defaultData });
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [form] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
    setQueryFromData(formValue);
    gridRef.current.fetch(formValue);
  }

  const saveSubmit = async () => {
    if (valid && valid.length > 0) {
      setShowValidate(true);
    } else {
      if (isEdit) {
        const result = await updateDictTable(rowData);
        if (result.status == 200) {
          message.success('更新成功！');
          setAddVisible(false);
          gridRef.current.fetch(queryFromData);
        }

      } else {
        const result = await saveDictTable(rowData);
        if (result.status == 200) {
          message.success('保存成功！');
          setAddVisible(false);
          gridRef.current.fetch(queryFromData);
        }
      }

    }
  }
  const clickAdd = () => {
    setRowData(defaultData);
    setIsEdit(false);
    setAddVisible(true);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteDictTable(record.id);
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
              <Form.Item name="dictName" label="字典名">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="code" label="字典编码">
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
        url="/api/erp/boss/sys/dictTable/pageList.do"
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
          setRowData(defaultData);
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
