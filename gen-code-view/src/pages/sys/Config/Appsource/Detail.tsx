import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Form, Button, Row, Col, Space, DatePicker, Input, Modal, Select, Card, Collapse, Descriptions, Divider, message } from 'antd';
import { history } from 'umi';
import Grid from '@/components/Grid';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import FormRender from 'form-render/lib/antd';
import { detailsAppsource } from '@/services/sys/appsource';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import TagMap from '@/commons/TagMap';
import request from '@/utils/request';
import { updateAppsourceUser } from '@/services/sys/appsource';


const { Option } = Select;
const { confirm } = Modal;
const { Panel } = Collapse;

const userTypeMap = {
  'OWNER': '管理员',
  'CODING': '开发',
  'TEST': '测试',
  'PRODUCT': '产品',
}

const FunctDetail: React.FC = (props) => {
  const [rowData, setRowData] = useState({});
  const [userData, setUserData] = useState([]);
  const [appUserData, setAppUserData] = useState({});
  const queryParams = props.location.query;
  const [appId, setAppId] = useState(0);
  const [form] = Form.useForm();
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
    }
  ];
  const fetchData = async () => {
    const result = await detailsAppsource(queryParams.id);
    return result.data || {};
  }
  useEffect(() => {
    if (appId != queryParams.id) {
      setAppId(queryParams.id);
      fetchData().then((data) => {
        setRowData(data);
        const userData = { id: data.id };
        const userList = data.userList || [];
        const excludeUserIds = {};
        const userDataList = [];
        userList.forEach((e) => {
          userData[e.userType] = e.userIds || [];
          e.users.filter(e => !excludeUserIds[e.userId]).forEach(e => {
            userDataList.push({ value: e.userId, label: `${e.userName}(${e.nickName})` });
            excludeUserIds[e.userId] = true;
          });
        });
        setAppUserData(userData);
        setUserData(userDataList);
        form.setFieldsValue(userData);
      });
    }
  });
  const returnPrev = () => {
    return (
      <Button type="primary" onClick={() => {
        history.goBack();
      }}> {'<< 返回'}</Button>
    )
  }
  const fetchUser = (value) => {
    request(`/api/sso/fuzzy/user?userName=${value}`)
      .then((resp) => {
        const { data = [] } = resp;
        const userList = data.map((e) => {
          return { value: e.userId, label: `${e.userName}(${e.nickName})` };
        });
        setUserData(userList);
      });
  }

  const submitHeadel = async (values) => {
    const result = await updateAppsourceUser(values);
    if (result.status == 200) {
      message.success('保存成功！');
      history.goBack();
    }
  }
  const saveSubmit = () => {
    form.validateFields()
      .then(values => {
        const param = { id: rowData.id };
        const userList = [];
        userList.push({ userType: 'OWNER', userIds: values.OWNER || [] });
        userList.push({ userType: 'CODING', userIds: values.CODING || [] });
        userList.push({ userType: 'TEST', userIds: values.TEST || [] });
        userList.push({ userType: 'PRODUCT', userIds: values.PRODUCT || [] });
        param.userList = userList;
        submitHeadel(param);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  return (
    <PageContainer>
      <Card>
        <Descriptions title="功能详情" extra={returnPrev()} bordered>
          {columns.map((e, index) => (
            <Descriptions.Item key={index} label={e.title}>{e.render ? e.render(rowData[e.dataIndex] || '') : rowData[e.dataIndex] || ''}</Descriptions.Item>
          ))}
        </Descriptions>
      </Card>
      <Card>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          initialValues={appUserData}
          form={form}
        >
          <Form.Item name='OWNER' label="负责人（owner）" rules={[{ required: true, message: '请输入负责人（owner）' }]}>
            <Select
              mode="multiple"
              placeholder="Select users"
              defaultValue={appUserData['OWNER']}
              filterOption={false}
              onSearch={fetchUser}
              showSearch
              allowClear
              style={{ width: '100%' }}
            >
              {userData.map(d => (
                <Option key={d.value} value={d.value}>{d.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='CODING' label="开发" rules={[{ required: true, message: '请输入开发人员' }]}>
            <Select
              mode="multiple"
              placeholder="Select users"
              filterOption={false}
              onSearch={fetchUser}
              style={{ width: '100%' }}
            >
              {userData.map(d => (
                <Option key={d.value} value={d.value}>{d.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='TEST' label="测试" rules={[{ required: true, message: '请输入测试人员' }]}>
            <Select
              mode="multiple"
              placeholder="Select users"
              filterOption={false}
              onSearch={fetchUser}
              style={{ width: '100%' }}
            >
              {userData.map(d => (
                <Option key={d.value}  value={d.value}>{d.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name='PRODUCT' label="产品" rules={[{ required: true, message: '请输入产品人员' }]}>
            <Select
              mode="multiple"
              placeholder="Select users"
              filterOption={false}
              onSearch={fetchUser}
              style={{ width: '100%' }}
            >
              {userData.map(d => (
                <Option key={d.value}  value={d.value}>{d.label}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
            <Button type="primary" onClick={saveSubmit}>保存</Button>
          </Form.Item>
        </Form>
      </Card>
    </PageContainer >
  );
}
export default FunctDetail;
