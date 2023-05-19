import React from 'react';
import { Gauge } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts'

const DemoGauge = (props) => {
    const config = {
        title: {
            visible: true,
            text: '仪表盘',
        },
        width: 400,
        height: 400,
        value: 64,
        min: 0,
        max: 100,
        range: [0, 25, 50, 75, 100],
        color: chartsColor,
        statistic: {
            visible: true,
            text: '优',
            color: '#30bf78',
        },
    };
    return <Gauge {...config} />;
};

export default DemoGauge;