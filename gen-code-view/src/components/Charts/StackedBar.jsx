import React from 'react';
import { StackedBar } from '@ant-design/charts';

const defaultData = [
    {
        地区: '华东',
        细分: '公司',
        销售额: 1454715.807999998,
    },
    {
        地区: '华东',
        细分: '消费者',
        销售额: 2287358.261999998,
    },
    {
        地区: '中南',
        细分: '公司',
        销售额: 1335665.3239999984,
    },
    {
        地区: '中南',
        细分: '消费者',
        销售额: 2057936.7620000008,
    },
    {
        地区: '东北',
        细分: '公司',
        销售额: 834842.827,
    },
    {
        地区: '东北',
        细分: '消费者',
        销售额: 1323985.6069999991,
    },
    {
        地区: '华北',
        细分: '公司',
        销售额: 804769.4689999995,
    },
    {
        地区: '华北',
        细分: '消费者',
        销售额: 1220430.5610000012,
    },
    {
        地区: '西南',
        细分: '公司',
        销售额: 469341.684,
    },
    {
        地区: '西南',
        细分: '消费者',
        销售额: 677302.8919999995,
    },
    {
        地区: '西北',
        细分: '公司',
        销售额: 253458.1840000001,
    },
    {
        地区: '西北',
        细分: '消费者',
        销售额: 458058.1039999998,
    },
];

const DemoStackedBar = (props) => {
    const config = {
        forceFit: true,
        title: {
            visible: false,
            text: '',
        },
        description: {
            visible: false,
            text: ''
        },
        data: defaultData,
        yField: props.chartsField || '地区',
        xField: props.value || '销售额',
        label: {
            offset: 0,
            visible: true,
            position: 'middle',
        },
        stackField: props.seriesField || '细分',
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    console.log(config)
    return <StackedBar {...config} />;
};

export default DemoStackedBar;