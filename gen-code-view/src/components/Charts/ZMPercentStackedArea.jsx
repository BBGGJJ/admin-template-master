import React from 'react';
import { PercentStackedArea } from '@ant-design/charts';

const defaultData = [
  {
    country: 'Asia',
    year: '1750',
    value: 502,
  },
  {
    country: 'Asia',
    year: '1800',
    value: 635,
  },
  {
    country: 'Asia',
    year: '1850',
    value: 809,
  },
  {
    country: 'Asia',
    year: '1900',
    value: 947,
  },
  {
    country: 'Asia',
    year: '1950',
    value: 1402,
  },
  {
    country: 'Asia',
    year: '1999',
    value: 3634,
  },
  {
    country: 'Asia',
    year: '2050',
    value: 5268,
  },
  {
    country: 'Africa',
    year: '1750',
    value: 106,
  },
  {
    country: 'Africa',
    year: '1800',
    value: 107,
  },
  {
    country: 'Africa',
    year: '1850',
    value: 111,
  },
  {
    country: 'Africa',
    year: '1900',
    value: 133,
  },
  {
    country: 'Africa',
    year: '1950',
    value: 221,
  },
  {
    country: 'Africa',
    year: '1999',
    value: 767,
  },
  {
    country: 'Africa',
    year: '2050',
    value: 1766,
  },
  {
    country: 'Europe',
    year: '1750',
    value: 163,
  },
  {
    country: 'Europe',
    year: '1800',
    value: 203,
  },
  {
    country: 'Europe',
    year: '1850',
    value: 276,
  },
  {
    country: 'Europe',
    year: '1900',
    value: 408,
  },
  {
    country: 'Europe',
    year: '1950',
    value: 547,
  },
  {
    country: 'Europe',
    year: '1999',
    value: 729,
  },
  {
    country: 'Europe',
    year: '2050',
    value: 628,
  },
];

const DemoPercentStackedArea = (props) => {
  const config = {
    title: {
      visible: false,
      text: props.title || '配置折线数据点样式',
    },
    description: {
      visible: false,
      text: props.remark || '自定义配置趋势线上数据点的样式',
    },
    padding: 'auto',
    forceFit: true,
    data: defaultData,
    xField: props.chartsField || 'year',
    yField: props.value || 'value',
    seriesField: props.seriesField || 'country',
    label: {
      visible: true,
      type: 'point',
      formatter: (v) => v,
    },
    point: {
      visible: true,
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const { data = [] } = props;
  if (data.length > 0 && props.chartsField && props.value) {
    config.data = data;
  }
  return <PercentStackedArea {...config} />;
};

export default DemoPercentStackedArea;
