import React, { useState, useRef, useCallback } from 'react';
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Button,
  Drawer,
  Space,
  Row,
  Col,
  Checkbox,
  Card,
  Descriptions,
  Select
} from 'antd';
const { TextArea } = Input;



const ColumnList: React.FC = (props) => {
  const columnList = props.columnList || [];
  const [data, setData] = useState<Array>(columnList);
  const [visible, setVisible] = useState<boolean>(false);
  const [column, setColumn] = useState<any>({});
  const [index, setIndex] = useState<number>(0);
  const [form] = Form.useForm();
  const [viewForm] = Form.useForm();
  const editColumn = (column, index) => {
    console.log(column, index);
    setColumn(column);
    setIndex(index);
    form.setFieldsValue(column.beanAttr);
    viewForm.setFieldsValue(column.viewAttr);
    setVisible(true);
  }
  const onClose = () => {
    setVisible(false);
    props.change([...data])
  }
  const getExtFormItem = () => {
    const inputType = viewForm.getFieldValue("inputType");
    if (!inputType || !("Select" == inputType || "Radio" == inputType)) {
      return <></>;
    }
    return (
      <Form.Item label="枚举值" name="inputEnumData">
        <TextArea placeholder='{"key":"value","key2":"value2"}' />
      </Form.Item>
    );
  }
  const onViewValueChange = (param) => {
    if (column && column != undefined) {
      const temp = { ...column };
      console.log(temp);
      const viewAttr = temp.viewAttr;
      temp.viewAttr = { ...viewAttr, ...param };
      console.log(temp);
      setColumn(temp);
      setColumn(temp);
      const list = [...data];
      list[index] = temp;
      setData(list);
    }
  }
  const onBeanValueChange = (param) => {
    if (column && column != undefined) {
      const temp = { ...column };
      console.log(temp);
      const viewAttr = temp.beanAttr;
      temp.beanAttr = { ...viewAttr, ...param };
      console.log(temp);
      setColumn(temp);
      const list = [...data];
      list[index] = temp;
      setData(list);
    }
  }
  const genEditDrader = () => {
    if (!column.tableColumn) {
      return (<></>);
    }
    return (
      <>
        <Descriptions title="表字段信息">
          <Descriptions.Item label="字段名">{column.tableColumn.columnName}</Descriptions.Item>
          <Descriptions.Item label="字段描述">{column.tableColumn.desc}</Descriptions.Item>
          <Descriptions.Item label="数据类型">{column.tableColumn.type}</Descriptions.Item>
          <Descriptions.Item label="字段长度">{column.tableColumn.lenth}</Descriptions.Item>
        </Descriptions>

        <Card title="属性信息">
          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 12 }}
            form={form}
            onValuesChange={onBeanValueChange}
            layout="horizontal"
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="属性名" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="属性描述" name="cnName">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="属性类型" name="typeClassName">
                  <Input disabled />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card title="页面信息">
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            form={viewForm}
            onValuesChange={onViewValueChange}
            layout="horizontal"
          >
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="默认值" name="defultValue">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="可编辑" name="allowEdit">
                  <Checkbox checked />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="列表展示" name="listView">
                  <Checkbox checked />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="正则校验" name="pattern">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="详情展示" name="detailView">
                  <Checkbox checked />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="可搜索" name="searchView">
                  <Checkbox checked />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item label="输入组件" name="inputType">
                  <Select>
                    <Option value="Input">普通文本输入</Option>
                    <Option value="InputNumber">数字输入</Option>
                    <Option value="DatePickerTime">日期时间</Option>
                    <Option value="DatePicker">日期</Option>
                    <Option value="TimePicker">时间</Option>
                    <Option value="Switch">开关</Option>
                    <Option value="Checkbox">复选</Option>
                    <Option value="Textarea">多行文本框</Option>
                    <Option value="Slider">滑动条</Option>
                    <Option value="Select">下拉框</Option>
                    <Option value="Radio">单选组</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={16}>
                {getExtFormItem()}
              </Col>
            </Row>
          </Form>
        </Card>

      </>
    );

  }
  const columns = [
    {
      title: '字段名',
      render: (text, record, index) => {
        return <span key={`columnName${index}`}>{record.tableColumn.columnName}</span>
      }
    },
    {
      title: '数据类型',
      render: (text, record, index) => {
        return <span key={`type${index}`}>{record.tableColumn.type}</span>
      }
    },
    {
      title: '属性名',
      render: (text, record, index) => {
        return <span key={`name${index}`}>{record.beanAttr.name}</span>
      }
    },
    {
      title: '描述',
      render: (text, record, index) => {
        return <span key={`cnName${index}`}>{record.beanAttr.cnName}</span>
      }
    },
    {
      title: '数据类型',
      render: (text, record, index) => {
        return <span key={`typeClassName${index}`}>{record.beanAttr.typeClassName}</span>
      }
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_: any, record: Item, index) => {
        return <Button key={`operation${index}`} disabled={record.tableColumn.primarKey} onClick={() => editColumn(record, index)}>编辑</Button>
      },
    },
  ];
  return (
    <div>
      <Table rowKey={(record) => record.tableColumn.columnName} columns={columns} dataSource={props.columnList} />
      <Drawer
        title="属性字段编辑"
        placement='left'
        width="50%"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button type="primary" onClick={onClose}>
              确认
            </Button>
          </Space>
        }
      >
        {genEditDrader()}
      </Drawer>
    </div >
  );
};

export default ColumnList;
