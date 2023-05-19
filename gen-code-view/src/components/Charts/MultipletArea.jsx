import React from 'react';
import { StackedArea } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts'

const defaultData = [
    { "country": "欧洲", "date": 1965, "value": 1058.1 },
    { "country": "欧洲", "date": 1966, "value": 1089.7 },
    { "country": "欧洲", "date": 1967, "value": 1121.7 },
    { "country": "欧洲", "date": 1968, "value": 1196.6 },
    { "country": "欧洲", "date": 1969, "value": 1285.5 },
    { "country": "CIS 地区", "date": 1965, "value": 593.3 },
    { "country": "CIS 地区", "date": 1966, "value": 630.9 },
    { "country": "CIS 地区", "date": 1967, "value": 663.2 },
    { "country": "CIS 地区", "date": 1968, "value": 687.8 },
    { "country": "CIS 地区", "date": 1969, "value": 719 },
    { "country": "中东", "date": 1966, "value": 50.4 },
    { "country": "中东", "date": 1967, "value": 52.7 },
    { "country": "中东", "date": 1968, "value": 55.6 },
    { "country": "中东", "date": 1969, "value": 58.5 },
    { "country": "中东", "date": 1970, "value": 61.5 },
    { "country": "非洲", "date": 2017, "value": 449.5 },
    { "country": "亚太地区", "date": 1965, "value": 441.6 },
    { "country": "亚太地区", "date": 1966, "value": 482.9 },
    { "country": "亚太地区", "date": 1967, "value": 506.1 },
    { "country": "亚太地区", "date": 1968, "value": 544.1 },
    { "country": "亚太地区", "date": 1969, "value": 619.8 },
    { "country": "亚太地区", "date": 1970, "value": 704.9 },

]
const MultipletArea= (props) => {
    const config = {
        title: {
            visible: false,
            text: props.remark || '堆叠面积图-areaLabel',
        },
        description: {
            visible: false,
            text: props.remark || '堆叠面积图中\uFF0C将label type设置为area时\uFF0Clabel显示在堆叠区域内\uFF0C使用户能够更容易的通过视觉将label和对应图形产生联系\u3002autoScale配置项设置为true时\uFF0Clabel会自适应堆叠区域的大小\u3002',
        },
        data: defaultData,
        xField: props.chartsField || 'date',
        yField: props.value || 'value',
        stackField: props.seriesField || 'country',
        color: chartsColor,
        xAxis: {
            type: 'dateTime',
            tickCount: 5,
        },
        label: {
            visible: true,
            type: 'area',
            autoScale: true,
        },
        legend: {
            visible: true,
            position: 'right-top',
        },
        responsive: true,
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <StackedArea {...config} />;
};

export default MultipletArea;