import React from 'react';
import { Form, Modal } from 'antd';
import 'antd/dist/antd.css';
import FormItem from './FormItem';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};

const EditForm = (props) => {
    const [form] = Form.useForm();
    const { onSubmit, onCancel, formData = {}, columns = [], name, title = '', modalVisible = false } = props;
    
    const handleSubmit = async () => {
        const fieldsValue = await form.validateFields();
        onSubmit(fieldsValue)
        form.resetFields();
    }
   const initForm = {};
    columns.forEach((column) => {
        initForm[column.dataIndex] = formData[column.dataIndex] || '';
    });
    return (
        <Modal
            width={640}
            title={title}
            visible={modalVisible}
            onOk={() => {
                handleSubmit();
              
            }}
            onCancel={() =>{
                onCancel();
            }}
        >
            <Form
                name={name}
                {...formItemLayout}
                layout='horizontal'
                form={form}
                initialValues={initForm}
            >
                {columns
                    .filter(e => !e.hideInSearch && e.valueType && e.valueType != 'index' && e.valueType != 'indexBorder' && e.valueType != 'option' && (e.key || e.dataIndex))
                    .map((item) => {
                        return <FormItem key={`item${item.dataIndex}`} formItem={item} defaultValue={formData[item.dataIndex] || undefined} />;
                    })}
            </Form>
        </Modal>
    );


}
export default EditForm;
