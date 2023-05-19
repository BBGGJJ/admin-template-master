!#parse
!#name /src/pages/${classInfo.businessModule?cap_first}/${classInfo.name}/components/UpdateForm.jsx
!#list

import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';

const FormItem = Form.Item;
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const UpdateForm = props => {
  const [formVals, setFormVals] = useState({
  	<#list classInfo.columnList as fieldItem >
	${fieldItem.beanAttr.name}: props.values.${fieldItem.beanAttr.name},
  </#list>
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentStep(currentStep + 1);

  const backward = () => setCurrentStep(currentStep - 1);

  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });
    handleUpdate(formVals);
  };

  const renderContent = () => {
    return (
      <>
	<#list classInfo.columnList as fieldItem >
		<#if !fieldItem.tableColumn.autoIncrement>
	    <FormItem
          name="${fieldItem.beanAttr.name}"
          label="${fieldItem.beanAttr.cnName}"
          rules={[
            {
              required: true,
              message: '请输入${fieldItem.beanAttr.cnName}！',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </FormItem>
		</#if>
   </#list>
      </>
    );
  };

  const renderFooter = () => {
      return (
        <>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
          <Button type="primary" onClick={() => handleNext()}>
            完成
          </Button>
        </>
      );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title="${classInfo.desc}编辑"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
	  <#list classInfo.columnList as fieldItem >
		<#if !fieldItem.tableColumn.autoIncrement>
		  ${fieldItem.beanAttr.name}: formVals.${fieldItem.beanAttr.name},
		</#if>
      </#list>
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
