import React, { useState, useCallback, useRef } from 'react';
import { Form, Button, Row, Col, Space } from 'antd';
import FormItem from './FormItem';

const FormSearch = (props) => {
  const [form] = Form.useForm();
  const { onSubmit, resetBtn = true, clickAdd, formData = {}, columns = [], name } = props;
  const [formDataObject, setFormDataObject] = useState(formData);
  const submitBur = () => {
    const result = [];
    if (onSubmit) {
      result.push((
        <Button
          type="primary"
          htmlType="submit"
          key="itemQueryBtn"
          onClick={() => {
            onSubmit(form.getFieldValue());
          }}
        >
          查询
                </Button>
      ));
    }
    if (resetBtn) {
      result.push(<Button
        type="primary"
        key="itemResetBtn"
        onClick={() => {
          form.resetFields();
        }}
      >
        重置
            </Button>);
    }
    if (clickAdd) {
      result.push(<Button
        type="primary"
        key="itemResetBtn"
        onClick={() => clickAdd()}
      >
        新增
            </Button>);
    }
    return result;
  }
  return (
    <Form
      name={name}
      form={form}
      initialValues={formDataObject}
      className="ant-advanced-search-form"
    ><Row gutter={24}>
        <Space>
          {columns
            .filter(e => e.searchView )
            .map((item,index) => {
              const obj = { ...item };
              if (!obj.searchRules) {
                obj.rules = [];
              }
              return (
                <FormItem key={index} formItem={obj} />
              );
            })}
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
            {submitBur()}

          </Space>
        </Col>
      </Row>
    </Form>
  );


}

export default FormSearch;
