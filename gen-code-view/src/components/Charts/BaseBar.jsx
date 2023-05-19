import React from 'react';
import { Bar } from '@ant-design/charts';

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
        action: '支付订单',
        pv: 15000,
    },
    {
        action: '完成交易',
        pv: 8500,
    },
];
const BaseBar = (props) => {
    const config = {
        title: {
            visible: false,
            text: props.title ||  '基础条形图',
        },
        description: {
            visible: false,
            text: props.remark ||'基础条形图的图形之间添加转化率标签图形\uFF0C用户希望关注从上到下的数据变化比例',
        },
        forceFit: true,
        data: defaultData,
        xField: props.chartsField || 'pv',
        yField: props.value || 'action',
        conversionTag: { visible: true },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Bar {...config} />;
};
export default BaseBar;