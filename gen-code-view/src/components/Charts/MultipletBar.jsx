import React from 'react';
import { GroupedBar } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts'

const defaultData = [
    {
        label: 'Mon.',
        type: 'series1',
        value: 2800,
    },
    {
        label: 'Mon.',
        type: 'series2',
        value: 2260,
    },
    {
        label: 'Tues.',
        type: 'series1',
        value: 1800,
    },
    {
        label: 'Tues.',
        type: 'series2',
        value: 1300,
    },
    {
        label: 'Wed.',
        type: 'series1',
        value: 950,
    },
    {
        label: 'Wed.',
        type: 'series2',
        value: 900,
    },
    {
        label: 'Thur.',
        type: 'series1',
        value: 500,
    },
    {
        label: 'Thur.',
        type: 'series2',
        value: 390,
    },
    {
        label: 'Fri.',
        type: 'series1',
        value: 170,
    },
    {
        label: 'Fri.',
        type: 'series2',
        value: 100,
    },
];

const DemoGroupedBar = (props) => {
    const config = {
        title: {
            visible: false,
        },
        data: defaultData,
        xField: props.chartsField ||  'value',
        yField: props.value || 'label',
        groupField: props.seriesField || 'type',
        color: chartsColor,
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <GroupedBar {...config} />;
};

export default DemoGroupedBar;