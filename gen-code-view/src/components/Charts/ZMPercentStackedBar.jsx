import React from 'react';
import { PercentStackedBar } from '@ant-design/charts';
import { chartsColor } from '@/commons/charts';

const defaultData = [
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
const DemoPercentStackedBar = (props) => {
  const config = {
    title: {
      visible: false,
      text: '百分比堆叠条形图',
    },
    data: defaultData,
    xField: props.chartsField || 'value',
    yField: props.value || 'year',
    stackField: props.seriesField || 'country',
    color: chartsColor,
    label: {
      visible: true,
      formatter: (v) => v,
    },
  };
  const { data = [] } = props;
  if (data.length > 0 && props.chartsField && props.value) {
    config.data = data;
  }
  return <PercentStackedBar {...config} />;
};

export default DemoPercentStackedBar;
