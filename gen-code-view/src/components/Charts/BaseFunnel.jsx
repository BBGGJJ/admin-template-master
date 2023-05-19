import React from 'react';
import { Funnel } from '@ant-design/charts';

const defaultData = [
    {
        action: '浏览网站',
        pv: 50000,
    },
    {
        action: '放入购物车',
        pv: 35000,
    },
    {
        action: '生成订单',
        pv: 25000,
    },
    {
        action: '支付',
        pv: 15000,
    },
    {
        action: '成交',
        pv: 8500,
    },
];

const BaseFunnel = (props) => {

    const config = {
        data: defaultData,
        xField: props.chartsField ||'action',
        yField: props.value || 'pv',
        transpose: true,
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Funnel {...config} />;
};

export default BaseFunnel;