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
const BasePie = (props) => {
  
    const config = {
        forceFit: true,
        title: {
            visible: false,
            text: '多色饼图',
        },
        description: {
            visible: false,
            text:
                '指定颜色映射字段(colorField)\uFF0C饼图切片将根据该字段数据显示为不同的颜色\u3002指定颜色需要将color配置为一个数组\u3002\n当把饼图label的类型设置为inner时\uFF0C标签会显示在切片内部\u3002设置offset控制标签的偏移值\u3002',
        },
        radius: 0.8,
        data: defaultData,
        angleField: props.value || 'value',
        colorField: props.chartsField ||'type',
        label: {
            visible: true,
            type: 'inner',
        },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Pie {...config} />;
};

export default BasePie;