import React from 'react';
import { Line } from '@ant-design/charts';

const defaultData = [
    {
        year: '1991',
        value: 3,
    },
    {
        year: '1992',
        value: 4,
    },
    {
        year: '1993',
        value: 3.5,
    },
    {
        year: '1994',
        value: 5,
    },
    {
        year: '1995',
        value: 4.9,
    },
    {
        year: '1996',
        value: 6,
    },
    {
        year: '1997',
        value: 7,
    },
    {
        year: '1998',
        value: 9,
    },
    {
        year: '1999',
        value: 13,
    },
];

const BaseLine = (props) => {
    const config = {
        title: {
            visible: false,
            text: props.title ||  '配置折线数据点样式',
        },
        description: {
            visible: false,
            text: props.remark || '自定义配置趋势线上数据点的样式',
        },
        padding: 'auto',
        forceFit: true,
        data: defaultData,
        xField: props.chartsField || 'year',
        yField: props.value || 'value',
        label: {
            visible: true,
            type: 'point',
        },
        point: {
            visible: true,
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#2593fc',
                lineWidth: 2,
            },
        },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    if (props.seriesField) {
        config.seriesField = props.seriesField;
    }
    return <Line {...config} />;
};

export default BaseLine;
