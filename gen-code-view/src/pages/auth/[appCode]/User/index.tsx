import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Radio, Transfer, Switch, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { saveUser, deleteUser, updateUser, detailsUser, updateUserRole } from '@/services/auth/user';
import { querRoleList } from '@/services/auth/role';


import { ExclamationCircleOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';

import TagMap from '@/commons/TagMap';

const { Option } = Select;
const { confirm } = Modal;

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

const FunctList: React.FC = (props) => {

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 80,
      fixed: 'left',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
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
      dataIndex: 'status',
      width: 80,
      render: (value, record) => <Switch checkedChildren="有效" unCheckedChildren="失效" defaultChecked={value} onChange={(status) => onChangeStatus(status, record.id)} />,
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
              gridRef.current.reload(queryFromData);
            }}
          >
            删除
            </a>
          <a
            key={`delete${record.id || ''}`}
            onClick={() => {
              setLoading(true);
              changeUserRole(record);
            }}
          >
            分配权限
              </a>
        </Space>
      ),
    }
  ];
  const [loading, setLoading] = useState(false);
  const [targetKeys, setTargetKeys] = useState([]);
  const [changeAuth, setChangeAuth] = useState(false);
  const [roleTransferData, setRoleTransferData] = useState(false);

  const [showValidate, setShowValidate] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [rowData, setRowData] = useState({ status: true });
  const [queryFromData, setQueryFromData] = useState({});
  const [valid, setValid] = useState([]);
  const [loadCode, setLoadCode] = useState(0);
  const appCode = props.match.params.appCode;

  const [form] = Form.useForm();
  const [createForm] = Form.useForm();
  const gridRef = useRef();

  const onQuerySubmit = (formValue) => {
    const param = { ...formValue };
    for (let v in paramparam) {
      if (!param[v]) {
        param[v] = null;
      }
    }
    setQueryFromData(param);
    param.appsourceId = appCode;
    gridRef.current.fetch(param)
  }
  useEffect(() => {
    if (loadCode !== appCode) {
      const params = { appsourceId: appCode };
      gridRef.current.fetch(params);
      setLoadCode(appCode);
      setQueryFromData(params);
      querRoleList({ appCode, page: { pageSize: 2000 } }).then((result) => {
        const { data = [] } = result.data || {};
        const transferData = data.map(e => {
          return {
            key: e.id,
            title: e.roleName,
            description: e.roleName,
          }
        });
        setRoleTransferData(transferData);
      });
    }
  });
  const onChangeStatus = async (status, id) => {
    await updateUser({ id, status, appsourceId: appCode });
  }
  const changeUserRole = async (record) => {
    setRowData(record);
    const result = await detailsUser(record.id);
    if (result.status == 200) {
      const data = result.data || {};
      const roleIds = data.roleIds || [];
      setTargetKeys(roleIds);
    }
    setChangeAuth(true);
    setLoading(false);
  }
  const submitHeadel = async () => {
    const params = createForm.getFieldValue();
    params.appsourceId = appCode;
    if (valid && valid.length > 0) {
      setShowValidate(true);
    } else {
      const result = await saveUser(params);
      if (result.status == 200) {
        message.success('保存成功！');
        setAddVisible(false);
        gridRef.current.fetch({ ...queryFromData, appsourceId: appCode });
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
  const saveUserRole = async () => {
    setLoading(true);
    const param = { ...rowData };
    param.roleIds = targetKeys;
    const result = await updateUserRole(param);
    if (result.status == 200) {
      message.success('修改成功');
      gridRef.current.fetch(queryFromData);
    }
    setChangeAuth(false);
    setLoading(false);
  }
  const clickAdd = () => {
    setRowData({ status: true });
    setAddVisible(true);
    setShowValidate(false);
  }
  const removeSubmit = async (record) => {
    const result = await deleteUser(record.id);
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
              <Form.Item name="userId" label="用户名" rules={[{ required: true, message: '必须填写用户名！' }]}>
                <Suggest method="get" valueKey="userName" url="/api/sso/fuzzy/user" response={(resp) => {
                  const { data = [] } = resp;
                  return data.map((e) => {
                    return { value: e.userId, label: `${e.userName}(${e.nickName})` };
                  });
                }} />
              </Form.Item>
              <Form.Item name="status" label="状态" rules={[{ required: true, message: '必须填写状态!' }]}>
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
  const onValuesChange = (value) => {
    setRowData({ ...rowData, ...value });
  }
  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  const handleChange = targetKeys => {
    setTargetKeys(targetKeys);
  };
  return (
    <PageContainer>
      <Grid
        ref={gridRef}
        fetch={false}
        title={funcQueryForm}
        url="/api/erp/boss/auth/authUser/pageList.do"
        columns={columns}
        params={{}}
        scroll={{ x: 1200, y: 300 }}
      />
      <Modal
        title={'新增对象'}
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
          {...formItemLayout}
          form={createForm}
          initialValues={rowData}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="id" hidden={true} shouldUpdate>
            <Input />
          </Form.Item>
          <Form.Item name="userId" label="用户名">
            <Suggest method="get" valueKey="userName" url="/api/sso/fuzzy/user" response={(resp) => {
              const { data = [] } = resp;
              return data.map((e) => {
                return { value: e.userId, label: `${e.userName}(${e.nickName})` };
              });
            }} />
          </Form.Item>
          <Form.Item name="status" label="状态">
            <Switch defaultChecked />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={'分配权限'}
        centered
        visible={changeAuth}
        onOk={saveUserRole}
        confirmLoading={loading}
        onCancel={() => {
          setChangeAuth(false);
        }}
      >
        <Transfer
          titles={['待分配权限', '已分配权限']}
          dataSource={roleTransferData}
          showSearch
          size="small"
          listStyle={{
            width: 600,
            height: 500,
          }}
          filterOption={filterOption}
          targetKeys={targetKeys}
          onChange={setTargetKeys}
          render={item => item.title}
        />
      </Modal>


    </PageContainer>

  );

}

export default FunctList;
