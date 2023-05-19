import React from 'react';
import { Gauge } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts'

const DemoGauge = (props) => {
    const config = {
        title: {
            visible: true,
            text: '刻度仪表盘',
        },
        width: 400,
        height: 400,
        value: 40,
        min: 0,
        max: 100,
        range: [0, 25, 50, 75, 100],
        statistic: {
            visible: true,
            text: '良',
            color: '#faad14',
        },
        color: chartsColor,
    };
    return <Gauge {...config} />;
};

export default DemoGauge;