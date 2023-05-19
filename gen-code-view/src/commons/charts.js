import React from 'react';
import { Avatar, Card } from 'antd';
import baseLine from '@/assets/charts/baseLine.png';
import scalingLine from '@/assets/charts/scalingLine.png';
import curveLine from '@/assets/charts/curveLine.png';
import multipletLine from '@/assets/charts/multipletLine.png';
import baseArea from '@/assets/charts/baseArea.png';
import scalingArea from '@/assets/charts/scalingArea.png';
import multipletArea from '@/assets/charts/multipletArea.png';
import percentStackedArea from '@/assets/charts/percentStackedArea.png';
import baseBar from '@/assets/charts/baseBar.png';
import ScalingBar from '@/assets/charts/ScalingBar.png';
import MultipletBar from '@/assets/charts/MultipletBar.png';
import StackedBar from '@/assets/charts/StackedBar.png';
import PercentStackedBar from '@/assets/charts/PercentStackedBar.png';
import BaseColumn from '@/assets/charts/BaseColumn.png';
import ScalingColumn from '@/assets/charts/ScalingColumn.png';
import MultipletColumn from '@/assets/charts/MultipletColumn.png';
import StackedColumn from '@/assets/charts/StackedColumn.png';
import BasePic from '@/assets/charts/BasePic.png';
import LabelPie from '@/assets/charts/LabelPie.png';
import AraneidPic from '@/assets/charts/AraneidPic.png';
import BaseDonut from '@/assets/charts/BaseDonut.png';
import BaseGauge from '@/assets/charts/BaseGauge.png';
import FanshapedGauge from '@/assets/charts/FanshapedGauge.png';
import ScaleGauge from '@/assets/charts/ScaleGauge.png';
import BaseFunnel from '@/assets/charts/BaseFunnel.png';
import MultipletFunnel from '@/assets/charts/MultipletFunnel.png';
import BaseTable from '@/assets/charts/BaseTable.jpg';
import ListTable from '@/assets/charts/ListTable.png';
import SliderMultipletLine from '@/assets/charts/SliderMultipletLine.png';

const { Meta } = Card;

export const charts = [
  {
    title: '直线图',
    charts: [
      {
        title: '普通直线图',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={baseLine} />}
          >
            <Meta title="" description="普通直线图" />
          </Card>
        ),
        chartType: 'baseLine',
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '缩略直线图',
        chartType: 'scalingLine',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={scalingLine} />}
          >
            <Meta title="" description="缩略直线图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '曲线直线图',
        chartType: 'curveLine',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={curveLine} />}
          >
            <Meta title="" description="曲线直线图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '多维度直线图',
        chartType: 'multipletLine',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={multipletLine} />}
          >
            <Meta title="" description="多维度直线图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'seriesField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '多维度滑动直线图',
        chartType: 'sliderMultipletLine',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={SliderMultipletLine} />}
          >
            <Meta title="" description="多维度滑动直线图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'seriesField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
    ],
  },
  {
    title: '面积图',
    charts: [
      {
        title: '基础面积图',
        chartType: 'baseArea',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={baseArea} />}
          >
            <Meta title="" description="基础面积图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '缩略面积图',
        chartType: 'scalingArea',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={scalingArea} />}
          >
            <Meta title="" description="缩略面积图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '堆叠面积图',
        chartType: 'multipletArea',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={multipletArea} />}
          >
            <Meta title="" description="堆叠面积图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'stackField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '百分比面积图',
        chartType: 'percentStackedArea',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={percentStackedArea} />}
          >
            <Meta title="" description="百分比面积图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'seriesField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
    ],
  },
  {
    title: '表格',
    charts: [
      {
        title: '普通表格',
        eidtType: 'table',
        chartType: 'baseTable',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BaseTable} />}
          >
            <Meta title="" description="普通表格" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '列表表格',
        eidtType: 'table',
        chartType: 'listTable',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={ListTable} />}
          >
            <Meta title="" description="列表表格" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'compareField' },
        ],
      },
    ],
  },
  {
    title: '条形图',
    charts: [
      {
        title: '基础条形图',
        chartType: 'baseBar',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={baseBar} />}
          >
            <Meta title="" description="基础条形图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '条形图（滚动条）',
        chartType: 'scalingBar',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={ScalingBar} />}
          >
            <Meta title="" description="条形图（滚动条）" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '多维度条形图',
        chartType: 'multipletBar',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={MultipletBar} />}
          >
            <Meta title="" description="多维度条形图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'groupField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      // {
      //   title: '百分比堆叠条形图',
      //   chartType: 'stackedBar',
      //   eidtType: 'default',
      //   avatar: (
      //     <Card
      //       hoverable
      //       style={{ width: '200px' }}
      //       cover={<Avatar shape="square" src={StackedBar} />}
      //     >
      //       <Meta title="" description="百分比堆叠条形图" />
      //     </Card>
      //   ),
      //   chartField: [
      //     { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
      //     { title: '多维度字段', fieldName: 'seriesField', remark: 'stackField' },
      //     { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
      //   ],
      // },
      {
        title: '百分比堆叠条形图',
        chartType: 'percentStackedBar',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={PercentStackedBar} />}
          >
            <Meta title="" description="百分比堆叠条形图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'stackField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
    ],
  },
  {
    title: '柱状图',
    charts: [
      {
        title: '基础柱状图',
        chartType: 'baseColumn',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BaseColumn} />}
          >
            <Meta title="" description="基础柱状图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '滚动柱状图',
        chartType: 'scalingColumn',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={ScalingColumn} />}
          >
            <Meta title="" description="滚动柱状图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '多维度柱状图',
        chartType: 'multipletColumn',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={MultipletColumn} />}
          >
            <Meta title="" description="多维度柱状图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'groupField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      // {
      //   title: '联通区域组件',
      //   chartType: 'stackedColumn',
      //   eidtType: 'default',
      //   avatar: (
      //     <Card
      //       hoverable
      //       style={{ width: '200px' }}
      //       cover={<Avatar shape="square" src={StackedColumn} />}
      //     >
      //       <Meta title="" description="联通区域组件" />
      //     </Card>
      //   ),
      //   chartField: [
      //     { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
      //     { title: '多维度字段', fieldName: 'seriesField', remark: 'stackField' },
      //     { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
      //   ],
      // },
    ],
  },
  {
    title: '饼图',
    charts: [
      {
        title: '多色饼图',
        chartType: 'basePic',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BasePic} />}
          >
            <Meta title="" description="多色饼图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
      {
        title: '带标签多色饼图',
        chartType: 'labelPie',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={LabelPie} />}
          >
            <Meta title="" description="带标签多色饼图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
      {
        title: '图形蜘蛛布局饼图',
        chartType: 'araneidPic',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={AraneidPic} />}
          >
            <Meta title="" description="图形蜘蛛布局饼图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
    ],
  },
  {
    title: '环装图',
    charts: [
      {
        title: '基础环装图',
        chartType: 'baseDonut',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BaseDonut} />}
          >
            <Meta title="" description="基础环装图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
    ],
  },
  {
    title: '仪表盘(未完成)',
    charts: [
      {
        title: '基础仪表盘',
        chartType: 'baseGauge',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BaseGauge} />}
          >
            <Meta title="" description="基础仪表盘" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
      {
        title: '扇形仪表盘',
        chartType: 'fanshapedGauge',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={FanshapedGauge} />}
          >
            <Meta title="" description="扇形仪表盘" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
      {
        title: '刻度仪表盘',
        chartType: 'scaleGauge',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={ScaleGauge} />}
          >
            <Meta title="" description="刻度仪表盘" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'colorField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'angleField' },
        ],
      },
    ],
  },
  {
    title: '漏斗图',
    charts: [
      {
        title: '基础漏斗图',
        chartType: 'baseFunnel',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={BaseFunnel} />}
          >
            <Meta title="" description="基础漏斗图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
        ],
      },
      {
        title: '基础漏斗图',
        chartType: 'multipletFunnel',
        eidtType: 'default',
        avatar: (
          <Card
            hoverable
            style={{ width: '200px' }}
            cover={<Avatar shape="square" src={MultipletFunnel} />}
          >
            <Meta title="" description="基础漏斗图" />
          </Card>
        ),
        chartField: [
          { title: '统计字段', fieldName: 'chartsField', remark: 'xField' },
          { title: '数据字段', fieldName: 'valueField', remark: 'yField' },
          { title: '多维度字段', fieldName: 'seriesField', remark: 'compareField' },
        ],
      },
    ],
  },
];

export const chartsColor = [
  '#6897a7',
  '#8bc0d6',
  '#60d7a7',
  '#dedede',
  '#fedca9',
  '#fab36f',
  '#d96d6f',
];
