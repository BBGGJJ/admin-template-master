import React, { useState, useEffect } from 'react';
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
const CurveLine = (props) => {
    const config = {
        title: {
            visible: false,
            text: props.title || '曲线折线图',
        },
        description: {
            visible: false,
            text: props.remark || '用平滑的曲线代替折线\u3002',
        },
        padding: 'auto',
        forceFit: true,
        data: defaultData,
        xField: props.chartsField || 'year',
        yField: props.value || 'value',
        smooth: true,
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

export default CurveLine;