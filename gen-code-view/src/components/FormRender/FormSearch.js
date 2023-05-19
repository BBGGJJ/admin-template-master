import React from 'react';
import { Form, Button, Space, Row, Col  } from 'antd';
import 'antd/dist/antd.css';
import FormItem from './FormItem';

const FormSearch = (props) => {
    const [form] = Form.useForm();
    const { onSubmit, resetBtn = true, clickAdd , formData = {}, columns = [], name} = props;
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
                    {'查询'}
                </Button>
            ));
        }
        if (resetBtn) {
            result.push(<Button
                type="primary"
                key="itemResetBtn"
                onClick={() => form.resetFields()}
            >
                {'重置'}
            </Button>);
        }
        if (clickAdd) {
            result.push(<Button
                type="primary"
                key="itemResetBtn"
                onClick={() => clickAdd()}
            >
                {'新增'}
            </Button>);
        }
        return result;
    }
    return (
        <Form
            name={name}
            layout='inline'
            form={form}
        ><Row gutter={24}>
            {columns
                .filter(e => !e.hideInSearch && e.valueType && e.valueType != 'index' && e.valueType != 'indexBorder' && e.valueType != 'option' && (e.key || e.dataIndex))
                .map((item) => {
                    const obj = { ...item };
                    if (!obj.searchRules) {
                        obj.rules = [];
                    }
                    return <FormItem key={`item${item.dataIndex}`} formItem={obj} defaultValue={formData[item.dataIndex] || undefined} />;
                })}
                </Row>
            <Row>
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
