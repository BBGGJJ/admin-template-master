import React from 'react';
import { Select, Spin } from 'antd';
import request from '@/utils/request';


const { Option } = Select;

class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fetching: false,
      value: props.value,
      method: props.method || 'post',
      valueKey: props.valueKey || 'suggest',
      page: {
        current: 1,
        pageNumber: 1,
        pageSize: 20,
        total: 0,
      },
    };
  }

  handleSearch = (value) => {
    if (value) {
      this.fetch(value);
    } else {
      this.setState({ data: [] });
    }
  };

  handleVerifyValue = () => {
    return new Promise((resolve, reject) => {
      this.props.form.validateFields((error, values) => {
        if (error) {
          return reject(error);
        }
        return resolve(values);
      });
    });
  };

  handleChange = (v) => {
    // console.log(v)
    // if (this.props.onChange) {
    //   console.log(this.props.formData)
    //   this.props.formData[this.props.name] = v.value;
    //   this.props.onChange(this.props.name, v.value, this.props.formData);
    // }
    this.state.value = v;
  };

  fetch = (value) => {
    this.setState({ data: [], fetching: true });
    const { method, valueKey } = this.state;
    if (method == 'get' && valueKey) {
      request(`${this.props.url}?${valueKey}=${value}`)
      .then((result) => {
        if (this.props.response) {
          const data = this.props.response(result);
          this.setState({
            data,
            fetching: false,
          });
          return;
        }
        const { data } = result.data;
        this.setState({
          data,
          fetching: false,
        });
      });
    } else {
      const reqParam = {};
      reqParam.page = this.state.page;
      reqParam.suggest = value;
      request(this.props.url, {
        method: 'post',
        data: reqParam,
      }).then((result) => {
        if (this.props.response) {
          const data = this.props.response(result);
          this.setState({
            data,
            fetching: false,
          });
          return;
        }
        const { data } = result.data;
        this.setState({
          data,
          fetching: false,
        });
      });
    }
  };
  render() {
    const { fetching, data } = this.state;
    const props = this.props;
    return (
      <Select
        showSearch
        allowClear
        placeholder={this.props.placeholder}
        value={props.value}
        style={{ width: '200px' }}
        filterOption={false}
        onSearch={this.handleSearch}
        required={props.required}
        onChange={(event) => {
          props.onChange(event);
        }}
      >
        {
          data.map((d) => <Option key={d.value} value={d.value}>{d.label}</Option>)
        }
      </Select>
    );
  }
}

export default Suggest;
