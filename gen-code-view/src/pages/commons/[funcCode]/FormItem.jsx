import React from 'react';
import {
  Form,
  Input,
  Col,
  InputNumber,
  Row,
  Switch,
  DatePicker,
  TimePicker,
  Rate,
  Radio,
  Slider,
  Checkbox,
  Select,
} from 'antd';
import 'antd/dist/antd.css';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import Suggest from '@/components/Suggest';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const dateRangeChange = (dateMoment = []) => {
  const start = dateMoment[0];
  const end = dateMoment[1];
  start.dataFormat = 'YYYY-MM-DD 00:00:00';
  end.dataFormat = 'YYYY-MM-DD 23:59:59';
};
const response = (resp) => {
  const { data = [] } = resp.data || {};
  return data.map((e) => {
    return { value: e.value, label: e.label };
  });
};
const formViewMapp = {
  number: (item) => {
    return (
      <InputNumber
        key={`InputNumber${item.dataIndex}`}
        min={item.min || 1}
        max={item.max || 10000000}
      />
    );
  },
  string: (item) => {
    return <Input key={`Input${item.dataIndex}`} placeholder={`请输入${item.title}`} />;
  },
  switch: (item) => {
    return (
      <Switch
        key={`Switch${item.dataIndex}`}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    );
  },
  dateTime: (item) => {
    return <DatePicker key={`DatePicker${item.dataIndex}`} showTime />;
  },
  data: (item) => {
    return <DatePicker key={`DatePicker${item.dataIndex}`} />;
  },
  time: (item) => {
    return <TimePicker key={`TimePicker${item.dataIndex}`} />;
  },
  textarea: (item) => {
    return <TextArea key={`TextArea${item.dataIndex}`} rows={item.rows || 4} />;
  },
  rate: (item) => {
    return <Rate key={`Rate${item.dataIndex}`} />;
  },
  radio: (item) => {
    const enums = item.enums || [];
    return (
      <Radio.Group key={`Radio${item.dataIndex}`}>
        {enums.map((enumItem) => {
          return <Radio value={enumItem.value}>{enumItem.label}</Radio>;
        })}
      </Radio.Group>
    );
  },
  slider: (item) => {
    return <Slider Slider={`Checkbox${item.dataIndex}`} />;
  },
  checkbox: (item) => {
    const { enums = [] } = item;
    return (
      <Checkbox.Group key={`Checkbox${item.dataIndex}`} style={{ width: '100%' }}>
        <Row>
          {enums.map((enumItem) => {
            return (
              <Col span={6}>
                <Checkbox value={enumItem.value}>{enumItem.label}</Checkbox>
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
    );
  },
  select: (item) => {
    const { enums = {} } = item;
    console.log(item);
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
        {Object.keys(enums).map((key) => {
          return <Option value={key} key={key}>{enums[key]}</Option>;
        })}
      </Select>
    );
  },
  rangePickerData: (item) => {
    return (
      <RangePicker
        format="YYYY-MM-DD"
        onChange={dateRangeChange}
        key={`rangePicker${item.dataIndex}`}
      />
    );
  },
  suggest: (item) => {
    return <Suggest url={item.url} response={item.response || response} />;
  },
};

const FormItem = (props) => {
  const { formItem, checke = false } = props;
  const valueType = formItem.queryValueType || formItem.viewType;
  const rules =[];
  if(formItem.required && checke){
    rules.push({ required: true, message: `请输入${formItem.title}` })
  }
  if (formViewMapp[valueType]) {
    return (
      <Form.Item
        label={formItem.title || ''}
        name={formItem.dataIndex || ''}
        rules={rules}
        hidden={formItem.hidden}
        key={`item${formItem.dataIndex}`}
      >
        {formViewMapp[valueType](formItem)}
      </Form.Item>
    );
  }
  return (
    <Form.Item hidden={formItem.hidden} label={formItem.title || ''} name={formItem.dataIndex || ''} rules={formItem.rules}   key={`item${formItem.dataIndex}`}>
      <Input />
    </Form.Item>
  );
};

export default FormItem;
