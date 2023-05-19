import React, { useState, useRef, useCallback } from 'react';
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
  Modal
} from 'antd';
import ColumnList from "./ColumnList"
import styles from './index.less';


const BeanEdit: React.FC = (props) => {
  const treeData = props.treeData || [];
  const [currTreeData, setCurrTreeData] = useState<Array>([...treeData]);
  const [selectKeys, setSelectKeys] = useState<Array>([]);
  const [columnList, setColumnList] = useState<Array>([]);
  const [selectData, setSelectData] = useState({});
  const [visible, setVisible] = useState<boolean>(false);
  const [form] = Form.useForm();
  const [beanForm] = Form.useForm();

  const onSelect = (_, { node }) => {
    let selectedKeys = []
    if (node.parent) {

    } else {
      selectedKeys = [node.tableName];
      setSelectData(node);
      setColumnList(node.columnList || []);
      beanForm.setFieldsValue({ ...node })
    }
    setSelectKeys(selectedKeys)
    console.log('selected', selectedKeys, node);
  }
  const submit = () => {
    console.log(currTreeData);
    props.nextClick(currTreeData);
  }
  const onDragEnter = info => {
    console.log(info);
  }
  const addParent = () => {
    setVisible(true);
  }
  const parentCancel = () => {
    setVisible(false);
  }
  const parentOk = () => {
    form.validateFields()
      .then(values => {
        const data = [...currTreeData];
        for (let item of data) {
          if (item.key == values.code) {
            message.error("编码重复，请从新填写")
            return false;
          }
        }
        data.push({
          title: values.name,
          key: values.code,
          parent: true,
          tableName: values.code,
          children: [],
        })
        setCurrTreeData(data);
        setVisible(false);
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
  }
  const onColumnListChange = (columnList) => {
    console.log(columnList);
  }
  const onDrop = info => {
    console.log(info);
    const drop = info.node;
    const drag = info.dragNode;
    let dropKey = drop.key;
    if (!drop.parent) {
      dropKey = drop.businessModule;
    }
    const data = [...currTreeData];
    for (let item of data) {
      if (item.key == dropKey) {
        const temp = { ...drag };
        temp.businessModule = item.key;
        temp.businessModuleDesc = item.title;
        item.children.push(temp);
        break;
      }
    }
    console.log(drag)
    for (let item of data) {
      if (item.key == drag.businessModule) {
        const children = item.children;
        let status = false;
        let index = 0;
        for (index in children) {
          console.log(children[index])
          if (children[index].tableName == drag.tableName) {
            status = true;
            break;
          }
        }
        if (status) {
          children.splice(index, 1);
        }
        break;
      }
    }
    setCurrTreeData(data);
  };
  const onBeanChange = (param) => {
    console.log(param)
    const data = { ...selectData, ...param };
    console.log(data);
    setSelectData(data);
    const treeData = [...currTreeData];
    for (let item of treeData) {
      if (item.key == data.businessModule) {
        const childs = item.children;
        for (let index in childs) {
          if (childs[index].tableName == data.tableName) {
            childs[index] = data;
            break;
          }
        }
        break;
      }
    }
    setCurrTreeData(treeData);
  }
  const editBeanInfo = () => {
    if (selectKeys == null || selectKeys.length < 1) {
      return (<>请选择要编辑的表</>)
    }
    return (
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          form={beanForm}
          onValuesChange={onBeanChange}
          layout="horizontal"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="表名称" name="tableName">
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="描述" name="desc">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="实体名" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="禁用新增" name="disableAdd">
                <Checkbox ></Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item label="禁用编辑" name="disableEdit">
                <Checkbox ></Checkbox>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="禁用删除" name="disableDelate">
                <Checkbox ></Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Card title="字段列表" bordered={false}>
          <ColumnList change={onColumnListChange} columnList={selectData.columnList} />
        </Card>
      </>
    );
  }
  return (
    <div>
      <Row gutter={24}>
        <Col span={8}>
          <Card title="列表" bordered={false} extra={<a href="#" onClick={addParent}>新增一级菜单</a>} >
            <Tree
              className="draggable-tree"
              draggable
              blockNode
              showLine
              defaultExpandAll
              selectedKeys={selectKeys}
              onSelect={onSelect}
              onDragEnter={onDragEnter}
              onDrop={onDrop}
              fieldNames={{ key: "tableName" }}
              treeData={currTreeData}
              titleRender={(item) =>
                <div className={item.tableName == selectKeys[0] ? styles.treeItemSelect : styles.treeItem} key={item.tableName || item.key}>
                  {item.parent ? `${item.title}` : `${item.desc}(${item.tableName})`}
                </div>
              }
            />
          </Card>
        </Col>
        <Col span={16}>
          <Card title="详情" bordered={false}>
            {
              editBeanInfo()
            }
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
        </Col>
        <Col span={8}>
          <Space size={15}>
            <Button type="primary" htmlType="submit" onClick={props.backClick}>
              上一步
            </Button>
            <Button type="primary" htmlType="submit" onClick={submit}>
              下一步
          </Button>
          </Space>
        </Col>
        <Col span={8}>
        </Col>
      </Row>
      <Modal
        visible={visible}
        title="Title"
        onOk={parentOk}
        onCancel={parentCancel}
        footer={[
          <Button key="back" onClick={parentCancel}>
            取消
        </Button>,
          <Button key="submit" type="primary" onClick={parentOk}>
            确定
         </Button>
        ]}
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          form={form}
          layout="horizontal"
        >
          <Form.Item label="菜单名" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="英文编码" name="code">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div >
  );
};

export default BeanEdit;
