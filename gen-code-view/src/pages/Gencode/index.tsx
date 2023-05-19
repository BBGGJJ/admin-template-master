import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  message,
  Drawer,
  Steps,
  Card,
  Row,
  Tree,
  List,
  Col,
  Space,
  Descriptions
} from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { queryTables, submitCodeGen, queryTemplates } from '@/services/code/code';
import TemplateSelect from './components/TemplateSelect';
import BeanEdit from './components/BeanEdit';
import SelectTable from './components/SelectTable';


const formDefaultData = {
  uri: 'jdbc:mysql://192.168.244.61:3307/brcc?characterEncoding=utf8',
  userName: 'report',
  password: 'Liupeng@123',
  databaseType: "MySQL",
};
const projectFormData = {
  packagePath: 'org.qvit',
  projectName: 'exmple',
  template: [],
  projectDesc: '管理系统',
  author: 'liupeng6251@163.com'
}
const { Step } = Steps;
const defaultModel = {
  title: '首页',
  key: 'home',
  tableName: 'home',
  parent: true,
  children: [],
}
const TableList: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [tables, setTables] = useState<Array>([]);
  const [dpProps, setDbProps] = useState<Array>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<number>([
    { ...defaultModel },
  ]);
  const [templates, setTemplates] = useState<Array>([]);
  const [projectInfo, setProjectInfo] = useState<number>({ ...projectFormData });
  const [form] = Form.useForm();
  const [projectForm] = Form.useForm();
  useEffect(() => {
    queryTemplates().then((result)=>{
      console.log("start");
      const templateData = result.data || [];
      setTemplates(templateData);
      setLoading(true);
      console.log("end",result);
    })
  }, [loading]);
  const submitQueryTables = async (params) => {
    console.log(params);
    const result = await queryTables(params);
    console.log(result);
    if (result.code != 0) {
      message.error('调用服务器异常');
    } else {
      setCurrentStep(currentStep + 1);
      setTables(result.data || []);
    }
  }
  const addTable = (table) => {
    table.add = true;
    table.key = table.tableName;
    table.title = `${table.tableName}(${table.desc})`;
    treeData.push(table);
    console.log(table)
    setTreeData([...treeData])
  }
  const submitDatebaseConnections = () => {
    form.validateFields()
      .then(values => {
        setDbProps(values);
        submitQueryTables(values);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const submitProjectInfo = () => {
    projectForm.validateFields()
      .then(values => {
        setProjectInfo({ ...projectInfo, ...values });
        setCurrentStep(currentStep + 1);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const editBeans = (treeData) => {
    console.log(treeData);
    setTreeData(treeData);
    projectForm.setFieldsValue(projectInfo);
    setCurrentStep(currentStep + 1);
  }
  const selectTables = (tableNames) => {
    if (tableNames.length <= 0) {
      message.error("必须选择至少一张表");
      return false;
    }
    if (tableNames.length == tables.length) {
      setTreeData([{ ...defaultModel, key: tables[0].businessModule, title: tables[0].businessModuleDesc, children: tables }])
      setCurrentStep(currentStep + 1);
      return true;
    }
    const treeMap = {};
    for (let tableName of tableNames) {
      treeMap[tableName] = true;
    }
    const treeData = tables.filter(e => treeMap[e.tableName]);
    setTreeData([{ ...defaultModel, key: tables[0].businessModule, title: tables[0].businessModuleDesc, children: treeData }])
    setCurrentStep(currentStep + 1);
  }
  const genProject = async () => {
    const params = { ...dpProps, ...projectInfo };
    const tables = [];
    for (let treeParent of treeData) {
      const children = treeParent.children;
      if (!children) {
        continue;
      }
      for (let child of children) {
        tables.push(child);
      }
    }
    console.log(params)
    params.tables = tables;
    const response = await submitCodeGen(params);
    console.log(response)
    if (response.status || response.status >= 300) {
      return;
    }
    const fileName = Date.now() + '.zip';
    console.log(response);
    const aLink = document.createElement('a');
    document.body.appendChild(aLink);
    aLink.style.display = 'none';
    const objectUrl = window.URL.createObjectURL(response);
    aLink.href = objectUrl;
    aLink.download = fileName;
    aLink.click();
    document.body.removeChild(aLink);

  }
  const getFormReader = () => {
    if (currentStep == 0) {
      return (
        <Card title={'数据库连接配置'} >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            form={form}
            layout="horizontal"
            initialValues={formDefaultData}
          >
            <Form.Item label="数据库类型" name="databaseType"
              rules={[
                {
                  required: true,
                  message: '数据库类型不能为空',
                }]}
            >
              <Select>
                <Select.Option value="MySQL">MySQL</Select.Option>
                <Select.Option value="Oracle">Oracle</Select.Option>
                <Select.Option value="PostgreSQL">PostgreSQL</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="数据库url" name="uri"
              rules={[
                {
                  required: true,
                  message: '数据库url不能为空',
                }]}>
              <Input />
            </Form.Item>
            <Form.Item label="用户名" name="userName"
              rules={[
                {
                  required: true,
                  message: '用户名不能为空',
                }]}>
              <Input />
            </Form.Item>
            <Form.Item label="密码" name="password"
              rules={[
                {
                  required: true,
                  message: '密码不能为空',
                }]}>
              <Input />
            </Form.Item>
            <Form.Item label="前缀" name="prefix">
              <Input placeholder="多个用逗号隔开" />
            </Form.Item>
            <Form.Item label=" " colon={false} >
              <Button type="primary" htmlType="submit" onClick={submitDatebaseConnections}>
                下一步
            </Button>
            </Form.Item>
          </Form>
        </Card>
      );
    } else if (currentStep == 1) {
      return (
        <SelectTable tables={tables} backClick={() => setCurrentStep(currentStep - 1)} nextClick={selectTables} />
      );
    } else if (currentStep == 2) {
      return (
        <div className="site-card-wrapper">
          <BeanEdit treeData={treeData} backClick={() => setCurrentStep(currentStep - 1)} nextClick={editBeans} />
        </div>
      );
    } else if (currentStep == 3) {
      return (
        <Card title={'项目信息配置'} >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            form={projectForm}
            layout="horizontal"
            defaultValue={projectFormData}
          >
            <Form.Item label="包路径" name="packagePath"
              rules={[
                {
                  required: true,
                  message: '包路径不能为空',
                }]}
            >
              <Input defaultValue="org.qvit" />
            </Form.Item>
            <Form.Item label="项目名" name="projectName"
              rules={[
                {
                  required: true,
                  message: '项目名不能为空',
                }]}
            >
              <Input defaultValue="example" />
            </Form.Item>
            <Form.Item label="选择模版" name="template"
              rules={[
                {
                  required: true,
                  message: '模版不能为空',
                }]}
            >
              <TemplateSelect templateData={templates} />
            </Form.Item>
            <Form.Item label="项目中文名" name="projectDesc"
              rules={[
                {
                  required: true,
                  message: '模版不能为空',
                }]}>
              <Input placeholder="管理系统" />
            </Form.Item>
            <Form.Item label="作者" name="author">
              <Input />
            </Form.Item>
            <Form.Item label=" " colon={false} >
              <Space size={15}>
                <Button type="primary" htmlType="submit" onClick={() => setCurrentStep(currentStep - 1)}>
                  上一步
               </Button>
                <Button type="primary" htmlType="submit" onClick={submitProjectInfo}>
                  下一步
               </Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      );
    } else if (currentStep == 4) {
      const templateMap = {};
      for (let index in templates) {
        const temp = templates[index];
        templateMap[temp.key] = temp.title;
      }
      console.log(templateMap);
      return (
        <div>
          <Descriptions title="信息确认">
            <Descriptions.Item label="包名">{projectInfo.packagePath}</Descriptions.Item>
            <Descriptions.Item label="项目名">{projectInfo.projectName}</Descriptions.Item>
            <Descriptions.Item label="作者">{projectInfo.author}</Descriptions.Item>
            <Descriptions.Item label="描述">{projectInfo.projectDesc}</Descriptions.Item>
          </Descriptions>
          <Card title="选择的模版">
            {projectInfo.template.map(e => (
              <p key={e}>q{templateMap[e]}</p>
            ))}
          </Card>
          <Row gutter={24}>
            <Col span={8}>
            </Col>
            <Col span={8}>
              <Space size={15}>
                <Button type="primary" htmlType="submit" onClick={() => setCurrentStep(currentStep - 1)}>
                  上一步
             </Button>
                <Button type="primary" htmlType="submit" onClick={genProject}>
                  确认生成项目
              </Button>
              </Space>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </div>
      );
    }
  }


  return (
    <PageContainer >
      <Card>
        <Steps current={currentStep} size="small">
          <Step title="第一步" description="数据库连接配置" />
          <Step title="第二步" description="选择表对象" />
          <Step title="第三步" description="业务对象设置" />
          <Step title="第四步" description="项目设置" />
          <Step title="第五步" description="确认信息" />
        </Steps>
      </Card>
      <br />
      {getFormReader()}
    </PageContainer>
  );
};

export default TableList;
