import React from 'react';
import { Form, Input, Button, InputNumber, Divider, Switch, DatePicker, TimePicker, Rate, Radio, Slider, Checkbox, Select } from 'antd';
import 'antd/dist/antd.css';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const { TextArea } = Input;

const formViewMapp = {
    number: (item) => {
        return (
            <InputNumber key={`InputNumber${item.dataIndex}`} min={item.min || 1} max={item.max || 10000000} />
        )

    },
    text: (item) => {
        return (
            <Input key={`Input${item.dataIndex}`}  placeholder={`请输入${item.title}`} />
        )
    },
    switch: (item) => {
        return (
            <Switch key={`Switch${item.dataIndex}`}
               checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
             />
        )
    },
    dateTime: (item) => {
        return (
            <DatePicker key={`DatePicker${item.dataIndex}`} showTime />
        )
    },
    data: (item) => {
        return (
            <DatePicker key={`DatePicker${item.dataIndex}`}  />
        )
    },
    time: (item) => {
        return (
            <TimePicker key={`TimePicker${item.dataIndex}`}   />
        )
    },
    textarea: (item) => {
        return (
            <TextArea key={`TextArea${item.dataIndex}`} rows={item.rows || 4} />
        )
    },
    rate: (item) => {
        return (
            <Rate
                key={`Rate${item.dataIndex}`}

            />
        )
    },
    radio: (item) => {
        const enums = item.enums || []
        return (
            <Radio.Group
                key={`Radio${item.dataIndex}`}
            >
                {enums.map((enumItem) => {
                    return (<Radio value={enumItem.value}>{enumItem.label}</Radio>)
                })}
            </Radio.Group>
        )
    },
    slider: (item) => {
        return (
            <Slider Slider={`Checkbox${item.dataIndex}`} />
        )
    },
    checkbox: (item) => {
        const { enums = [] } = item;
        return (
            <Checkbox.Group
                key={`Checkbox${item.dataIndex}`}
                style={{ width: '100%' }}>
                <Row>
                    {enums.map((enumItem) => {
                        return (<col span={6}><Checkbox value={enumItem.value}>{enumItem.label}</Checkbox></col>)
                    })}
                </Row>
            </Checkbox.Group>
        )
    },
    select: (item) => {
        const {enums = []}=item;
        return (
            <Select
                showSearch
                key={`Select${item.dataIndex}`}
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {enums.map((enumItem) => {
                    return <Option value={enumItem.value}>{enumItem.label}</Option>
                })}
            </Select>
        )
    },
}

class FormItem extends React.Component {
    render() {
        const { formItem } = this.props;
        const valueType =formItem.queryValueType || formItem.valueType;
        if (formViewMapp[formItem.valueType]) {
            return (
                (<Form.Item
                    label={formItem.title || ''}
                    name={formItem.dataIndex || ''}
                    rules={formItem.rules}
                >
                    {formViewMapp[valueType](formItem)}
                </Form.Item>)

            );
        } else {
            return (<Form.Item
                label={formItem.title || ''}
                name={formItem.dataIndex || ''}
                rules={formItem.rules}
            >
                <Input />
            </Form.Item>)
        }
    }

}

export default FormItem;