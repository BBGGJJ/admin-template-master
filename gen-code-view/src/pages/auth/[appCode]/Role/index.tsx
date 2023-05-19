import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Drawer, Switch, Tree, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { saveRole, deleteRole, updateRole, detailsRole, updateRoleUris } from '@/services/auth/role';
import { queryAllUrlTree } from '@/services/auth/url';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;
const { TextArea } = Input;
const { TreeNode } = Tree;


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
};
const convertTreeNode = (dataList, keys) => {
  return dataList.map(data => {
    keys.push(data.id);
    return {
      title: data.uriName,
      key: data.id,
      children: data.childs ? convertTreeNode(data.childs, keys) : null,
    }
  });
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
      title: '角色名称',
      dataIndex: 'roleName',
      width: 150,
    },
    {
      title: '角色状态',
      dataIndex: 'roleStatus',
      width: 150,
      render: TagMap['validStatusEnum'],
    },
    {
      title: '角色描述',
      dataIndex: 'roleDescription',
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
              setLoading(true);
              setRowData(record);
              setIsEdit(true);
              setAddVisible(true);
              setLoading(false);
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
              setLoading(true);
              fetchDetailsRole(record.id);
              setRowData(record);
              setLoading(false);
              setAuthValidate(true);
            }}
          >
            分配权限
          </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [loadCode, setLoadCode] = useState(0);
  const [authValidate, setAuthValidate] = useState(false);
  const [loadTreeData, setLoadTreeData] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [allKeys, setAllKeys] = useState<string[]>([]);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({ roleStatus: true });
  const [treeData, setTreeData] = useState([]);
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const appCode = props.match.params.appCode;

  const [form] = Form.useForm();
  const [createForm] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    for (let v in formValue) {
      if (!formValue[v]) {
        formValue[v] = null;
      }
    }
    formValue.appCode = appCode;
    setQueryFromData(formValue);
    gridRef.current.fetch(formValue)
  }
  const submitHeadel = async () => {
    const params = createForm.getFieldValue();
    params.appCode = appCode;
    if (valid && valid.length > 0) {
      setShowValidate(true);
    } else {
      if (isEdit) {
        const result = await updateRole(params);
        if (result.status == 200) {
          message.success('更新成功！');
          setAddVisible(false);
          gridRef.current.fetch(queryFromData);
        }

      } else {
        const result = await saveRole(params);
        if (result.status == 200) {
          message.success('保存成功！');
          setAddVisible(false);
          gridRef.current.fetch(queryFromData);
        }

      }
    }
  }
  const saveSubmit = () => {
    createForm.validateFields()
      .then(values => {
        submitHeadel(values);
      }).catch(errorInfo => {
        console.error(errorInfo);
      });
  }
  useEffect(() => {
    if (loadCode !== appCode) {
      setLoadCode(appCode);
      gridRef.current.fetch({ appCode });
      setQueryFromData({ appCode });
      const params = { appCode };
      fetchTreeData(params).then((dataList) => {
        const keys = [];
        const tree = convertTreeNode(dataList, keys);
        setTreeData(tree);
        setAllKeys(keys);
      });
    }
  });

  const fetchTreeData = async () => {
    const params = { appCode };
    const result = await queryAllUrlTree(params);
    return result.data || [];
  }
  const fetchDetailsRole = async (roleId) => {
    const result = await detailsRole(roleId);
    const role = result.data || {};
    const { uriIds } = role;
    setSelectedKeys(uriIds);
  }

  const clickAdd = () => {
    setRowData({ roleStatus: true });
    setIsEdit(false);
    setAddVisible(true);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteRole(record.id);
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
              <Form.Item name="roleName" label="角色名称">
                <Input placeholder="请输入" />
              </Form.Item>
              <Form.Item name="roleStatus" label="角色状态">
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
  const onAuthUpdate = async () => {
    const param = {}
    param.uriIds = selectedKeys;
    param.id = rowData.id;
    const result = await updateRoleUris(param);
    if (result.status == 200) {
      message.success('修改成功');
      onAuthClose();
    }
  }
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const onAuthClose = () => {
    setAuthValidate(false);
  };
  const onAuthSelect = (info) => {
    setSelectedKeys(info.checked || []);
  }

  return (
    <PageContainer>
      <Grid
        ref={gridRef}
        title={funcQueryForm}
        fetch={false}
        url="/api/erp/boss/auth/role/pageList.do"
        columns={columns}
        params={{ appCode }}
        scroll={{ x: 1200, y: 300 }}
      />
      <Modal
        title={isEdit ? '编辑对象' : '新增对象'}
        centered
        visible={addVisible}
        onOk={saveSubmit}
        confirmLoading={loading}
        onCancel={() => {
          setRowData({ roleStatus: true });
          setShowValidate(false);
          setAddVisible(false);
        }}
        width={500}
      >
        <Form
          form={createForm}
          initialValues={rowData}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="id" hidden={true} shouldUpdate>
            <Input />
          </Form.Item>
          <Form.Item name="roleName" label="角色名" rules={[{ required: true, message: '请输入角色名' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="roleStatus" label="角色状态" rules={[{ required: true, message: '请选择角色状态' }]}>
            <Switch defaultChecked />
          </Form.Item>
          <Form.Item name="roleDescription" label="角色描述" >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
      <Drawer
        title="分配菜单权限"
        placement="right"
        width={720}
        bodyStyle={{ paddingBottom: 80 }}
        closable={false}
        onClose={onAuthClose}
        okText="保存"
        cancelText="取消"
        visible={authValidate}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onAuthClose} style={{ marginRight: 8 }}>
              Cancel
             </Button>
            <Button onClick={onAuthUpdate} type="primary">
              Submit
             </Button>
          </div>
        }
      >
        <Tree
          checkable
          checkStrictly
          defaultExpandAll={true}
          defaultExpandedKeys={allKeys}
          onCheck={onAuthSelect}
          checkedKeys={selectedKeys}
          treeData={treeData}
        />
      </Drawer>
    </PageContainer>

  );

}

export default FunctList;
