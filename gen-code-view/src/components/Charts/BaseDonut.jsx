import React from 'react';
import { Donut } from '@ant-design/charts';

const defaultData = [
    {
        type: '分类一',
        value: 27,
    },
    {
        type: '分类二',
        value: 25,
    },
    {
        type: '分类三',
        value: 18,
    },
    {
        type: '分类四',
        value: 15,
    },
    {
        type: '分类五',
        value: 10,
    },
    {
        type: '其它',
        value: 5,
    },
];
const BaseDonut = (props) => {

    const config = {
        forceFit: true,
        title: {
            visible: false,
            text: '环图-指标卡',
        },
        description: {
            visible: false,
            text: '环图指标卡能够代替tooltip\uFF0C在环图中心挖空部分显示各分类的详细信息\u3002',
        },
        radius: 0.8,
        padding: 'auto',
        data: defaultData,
        angleField: props.value || 'value',
        colorField: props.chartsField || 'type',
        statistic: { visible: true },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Donut {...config} />;
};

export default BaseDonut;