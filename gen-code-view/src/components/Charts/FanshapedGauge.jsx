import React from 'react';
import { Gauge } from '@ant-design/charts';

const FanshapedGauge  = (props) => {
    const config = {
        title: {
            visible: true,
            text: '扇形仪表盘',
        },
        width: 400,
        height: 400,
        value: 34,
        min: 0,
        max: 100,
        range: [0, 70],
        format: (v) => {
            return `${v} %`;
        },
        color: ['l(0) 0:#b0d0ff 1:#5f92f9'],
    };
    return <Gauge {...config} />;
};

export default FanshapedGauge;