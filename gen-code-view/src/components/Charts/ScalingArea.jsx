
import React from 'react';
import { Area } from '@ant-design/charts';


const defaultData = [
    { "城市": "七台河", "销售额": 52827.32 },
    { "城市": "万县", "销售额": 16921.576 },
    { "城市": "三亚", "销售额": 22698.396 },
    { "城市": "三岔子", "销售额": 3262.98 },
    { "城市": "三明", "销售额": 1458.8 },
    { "城市": "上梅", "销售额": 11704.476 },
    { "城市": "上海", "销售额": 582450.5679999999 },
    { "城市": "上虞", "销售额": 10672.872 },
    { "城市": "东丰", "销售额": 1785.84 },
    { "城市": "东台", "销售额": 2789.892 },
    { "城市": "东宁", "销售额": 2706.2 },
    { "城市": "东村", "销售额": 13692.14 },
    { "城市": "东海", "销售额": 4508.28 },
    { "城市": "东胜", "销售额": 12766.068 },
    { "城市": "东莞", "销售额": 10165.89 },
    { "城市": "东营", "销售额": 17153.92 },
    { "城市": "中枢", "销售额": 1050.42 },
    { "城市": "丰县", "销售额": 10309.516 },
    { "城市": "丰润", "销售额": 82.04 },
    { "城市": "丰镇", "销售额": 3507.336 },
    { "城市": "临朐", "销售额": 833.7 },
    { "城市": "临水", "销售额": 21443.1 },
    { "城市": "临江", "销售额": 36496.74 },
    { "城市": "临汾", "销售额": 26205.48 },
    { "城市": "临沂", "销售额": 97200.74 },
    { "城市": "临海", "销售额": 7071.456 },
]
const ScalingArea = (props) => {
    const config = {
        title: {
            visible: false,
            text: props.title || '基础面积图 - 缩略轴',
        },
        description: {
            visible: false,
            text: props.remark ||'缩略轴 (slider) 交互适用于数据较多\uFF0C用户希望关注数据集中某个特殊区间的场景\u3002',
        },
        data: defaultData,
        xField: props.chartsField || '城市',
        xAxis: {
            visible: true,
            label: {
                visible: true,
                autoHide: true,
            },
        },
        yField: props.value || '销售额',
        interactions: [
            {
                type: 'slider',
                cfg: {
                    start: 0,
                    end: 0.55,
                },
            },
        ],
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    if (props.seriesField) {
        config.seriesField = props.seriesField;
    }
    return <Area {...config} />;
};

export default ScalingArea;