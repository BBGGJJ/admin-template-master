import React, { useState, useRef } from 'react';
import {
  Table,
  Row,
  Button,
  Col,
  Space
} from 'antd';

const columns = [
  {
    title: '表名',
    dataIndex: 'tableName',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '对象名',
    dataIndex: 'name',
  },
];

const SelectTable: React.FC = (props) => {
  const [selectKeys, setSelectKeys] = useState<Array>([]);
  const tables = props.tables || [];
  const rowSelection = {
    selectedRowKeys: selectKeys,
    onChange: (keys) => { onSelectChange(keys) },
  };
  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectKeys(selectedRowKeys);
  };
  const submit = () => {
    props.nextClick(selectKeys);
  }
  return (
    <div>
      <Table pagination={false} rowKey={(record) => record.tableName} rowSelection={rowSelection} columns={columns} dataSource={tables} />
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
    </div>
  );
};

export default SelectTable;
