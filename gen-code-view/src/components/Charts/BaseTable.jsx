import React from 'react';
import { Table } from 'antd';

const defaultData = [
    {
        "Date": "2015-02",
        "count": 1276,
        "max": 1000,
        "min": 0,
        "avg": 102,
    },
    {
        "Date": "2015-02",
        "count": 1276,
        "max": 1000,
        "min": 0,
        "avg": 102,
    },
    {
        "Date": "2015-02",
        "count": 1276,
        "max": 1000,
        "min": 0,
        "avg": 102,
    },
    {
        "Date": "2015-02",
        "count": 1276,
        "max": 1000,
        "min": 0,
        "avg": 102,
    },
];
const fieldItem = [
    {
        fieldDesc: '日期',
        fieldName: 'Date',
        status: true,
        key: 'Date',
    },
    {
        fieldDesc: '总数',
        fieldName: 'count',
        status: true,
        key: 'count',
    },
    {
        fieldDesc: '最大',
        fieldName: 'max',
        status: true,
        key: 'max',
    },
    {
        fieldDesc: '最小',
        fieldName: 'min',
        status: true,
        key: 'min',
    },
    {
        fieldDesc: '平均',
        fieldName: 'avg',
        status: true,
        key: 'avg',
        joinField: 'min',
    },
    {
        fieldDesc: '其它',
        fieldName: 'avg',
        status: false,
        key: 'avg',
    },

]
const BaseArea = (props) => {
    let datasource = defaultData;
    if (props.data && props.data.length > 0) {
        datasource = props.data;
    }
    let tmpColumn = fieldItem;
    if (props.fieldItem && props.fieldItem.length > 0) {
        tmpColumn = props.fieldItem;
    }
    const column = tmpColumn.filter(e => e.status).map(v => {
        return { title: v.fieldDesc, dataIndex: v.fieldName, key: v.fieldName, joinField: v.joinField };
    })
    return <Table pagination={false} dataSource={datasource} columns={column} />;
};

export default BaseArea;