import React from 'react';
import { Pie } from '@ant-design/charts';

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
const LablePie = (props) => {
    const { chartsField,value} = props;
    const config = {
        forceFit: true,
        title: {
            visible: false,
            text: '饼图-外部圆形图形标签(outer-center label)',
        },
        description: {
            visible: false,
            text:
                '当把饼图label的类型设置为outer-center时\uFF0C标签在切片外部拉线显示\u3002outer-center布局的label发生遮挡会直接隐藏而不偏移躲避\uFF0C相对于outer label布局来说\uFF0C更美观',
        },
        radius: 0.8,
        data: defaultData,
        angleField: value || 'value',
        colorField: chartsField ||'type',
        label: {
            visible: true,
            type: 'outer-center',
            formatter: (text, item) => `${item._origin[chartsField]}: ${item._origin[value]}`,
        },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Pie {...config} />;
};

export default LablePie;