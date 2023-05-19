import React from 'react';
import { Funnel } from '@ant-design/charts';

const defaultData = [
    {
        action: '浏览网站',
        pv: 50000,
        quarter: '2020Q1',
    },
    {
        action: '放入购物车',
        pv: 35000,
        quarter: '2020Q1',
    },
    {
        action: '生成订单',
        pv: 25000,
        quarter: '2020Q1',
    },
    {
        action: '支付订单',
        pv: 15000,
        quarter: '2020Q1',
    },
    {
        action: '完成交易',
        pv: 11500,
        quarter: '2020Q1',
    },
    {
        action: '浏览网站',
        pv: 80000,
        quarter: '2020Q2',
    },
    {
        action: '放入购物车',
        pv: 63000,
        quarter: '2020Q2',
    },
    {
        action: '生成订单',
        pv: 47000,
        quarter: '2020Q2',
    },
    {
        action: '支付订单',
        pv: 24000,
        quarter: '2020Q2',
    },
    {
        action: '完成交易',
        pv: 17500,
        quarter: '2020Q2',
    },
];
const MultipletFunnel = (props) => {
    const config = {
        data: defaultData,
        xField: props.chartsField || 'action',
        yField: props.value || 'pv',
        compareField: props.seriesField || 'quarter',
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Funnel {...config} />;
};

export default MultipletFunnel;