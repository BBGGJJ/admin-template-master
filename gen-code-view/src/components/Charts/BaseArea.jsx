import React  from 'react';
import { Area } from '@ant-design/charts';

const defaultData = [
    {
        "Date": "2015-02",
        "scales": 1276
    },
    {
        "Date": "2015-03",
        "scales": 1033
    },
    {
        "Date": "2015-04",
        "scales": 956
    },
    {
        "Date": "2015-05",
        "scales": 845
    },
    {
        "Date": "2015-06",
        "scales": 1089
    },
    {
        "Date": "2015-07",
        "scales": 944
    },
    {
        "Date": "2015-08",
        "scales": 1043
    },
    {
        "Date": "2015-09",
        "scales": 893
    },
    {
        "Date": "2015-10",
        "scales": 840
    },
    {
        "Date": "2015-11",
        "scales": 934
    },
    {
        "Date": "2015-12",
        "scales": 810
    }
];
const BaseArea = (props) => {
    const config = {
        title: {
            visible: false,
        },
        data: defaultData,
        xField: props.chartsField || 'Date',
        yField: props.value || 'scales',
    };
    const { data = [] } = props;
    if (data.length > 0 && props.chartsField && props.value) {
        config.data = data;
    }
    return <Area {...config} />;
};

export default BaseArea;