import React from 'react';
import { GroupedColumn } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts'

const defaultData = [
    {
        name: 'London',
        月份: 'Jan.',
        月均降雨量: 18.9,
    },
    {
        name: 'London',
        月份: 'Feb.',
        月均降雨量: 28.8,
    },
    {
        name: 'London',
        月份: 'Mar.',
        月均降雨量: 39.3,
    },
    {
        name: 'London',
        月份: 'Apr.',
        月均降雨量: 81.4,
    },
    {
        name: 'London',
        月份: 'May',
        月均降雨量: 47,
    },
    {
        name: 'London',
        月份: 'Jun.',
        月均降雨量: 20.3,
    },
    {
        name: 'London',
        月份: 'Jul.',
        月均降雨量: 24,
    },
    {
        name: 'London',
        月份: 'Aug.',
        月均降雨量: 35.6,
    },
    {
        name: 'Berlin',
        月份: 'Jan.',
        月均降雨量: 12.4,
    },
    {
        name: 'Berlin',
        月份: 'Feb.',
        月均降雨量: 23.2,
    },
    {
        name: 'Berlin',
        月份: 'Mar.',
        月均降雨量: 34.5,
    },
    {
        name: 'Berlin',
        月份: 'Apr.',
        月均降雨量: 99.7,
    },
    {
        name: 'Berlin',
        月份: 'May',
        月均降雨量: 52.6,
    },
    {
        name: 'Berlin',
        月份: 'Jun.',
        月均降雨量: 35.5,
    },
    {
        name: 'Berlin',
        月份: 'Jul.',
        月均降雨量: 37.4,
    },
    {
        name: 'Berlin',
        月份: 'Aug.',
        月均降雨量: 42.4,
    },
];
const MultipletColumn = (props) => {
   
    const config = {
        title: {
            visible: false,
            text: '分组柱状图',
        },
        forceFit: true,
        data: defaultData,
        xField: props.chartsField || '月份',
        yField: props.value || '月均降雨量',
        yAxis: { min: 0 },
        label: { visible: true },
        groupField: props.seriesField || 'name',
        color: chartsColor,
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <GroupedColumn {...config} />;
};

export default MultipletColumn;