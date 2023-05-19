import React, { useState, useCallback, useRef } from 'react';
import { Form, Modal } from 'antd';
import FormItem from './FormItem';

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

class EditForm extends React.Component {
  render(){
    const formData  = this.props.formData;
    const { edit = false,columns = [], name } = this.props;
    const items = columns.filter(e => (!edit && e.create) || (edit && e.edit) ).map((item,index) => {
        return (
          <FormItem
            key={index}
            checke={true}
            formItem={item}
            readOnly={edit}
            defaultValue={formData[item.dataIndex] || undefined}
          />
        );
    });
    return (
        <Form
          {...this.props}
          name={name}
          {...formItemLayout}
          // layout="horizontal"
          readOnly={edit}
          initialValues={formData}
          onValuesChange={(changedValues, allValues) =>{
            this.props.onChange(allValues);
          }}
        >
          {items}
        </Form>
    );
  };
};
export default EditForm;
