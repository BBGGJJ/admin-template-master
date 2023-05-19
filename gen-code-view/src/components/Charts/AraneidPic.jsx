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
const DemoPie= (props) => {
  
    const config = {
        forceFit: true,
        title: {
            visible: false,
            text: '饼图-图形标签蜘蛛布局',
        },
        description: {
            visible: false,
            text:
                '当把饼图label的类型设置为spider时\uFF0C标签分为两组\uFF0C在图表两侧拉线对齐显示\u3002一般来说\uFF0C蜘蛛布局的label更不容易相互遮挡\u3002',
        },
        radius: 0.8,
        data: defaultData,
        angleField: props.value || 'value',
        colorField: props.chartsField || 'type',
        label: {
            visible: true,
            type: 'spider',
        },
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Pie {...config} />;
};

export default DemoPie;