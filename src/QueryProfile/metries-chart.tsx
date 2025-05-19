// Copyright 2024 DatabendLabs.
// @ts-nocheck
import { useMount } from 'ahooks';
import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from 'echarts/charts';
import {
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import React, { FC, memo, ReactElement, useRef } from 'react';
import { useReshape } from '../hooks/useReshape';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | BarSeriesOption
>;

echarts.use([
  GridComponent,
  LineChart,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
]);
interface ISerices {
  name: string;
  type: 'line' | 'bar';
  data: number[];
}
interface IProps {
  series: ISerices[];
  legendData: string[];
  xData: any[];
  isLight: boolean;
}
const MetriesChart: FC<IProps> = ({
  series,
  legendData,
  xData,
  isLight,
}): ReactElement => {
  const domRef = useRef(null);
  const { reshape } = useReshape();
  const lineColor = isLight
    ? 'rgba(1, 14, 41, 0.08)'
    : 'rgba(255, 255, 255, 0.08)';
  const xLabelColor = isLight
    ? 'rgba(12, 22, 43, 0.6)'
    : 'rgba(249, 249, 249, 0.6)';
  useMount(() => {
    const myChart = echarts.init(domRef.current);
    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        type: 'scroll',
        data: legendData,
      },
      grid: {
        left: '13%',
        right: '9%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xData,
        axisLine: {
          lineStyle: {
            color: lineColor,
          },
        },
        axisLabel: {
          showMinLabel: true,
          showMaxLabel: true,
          color: xLabelColor,
          margin: 8,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        offset: 30,
        type: 'value',
      },
      series: series as any[],
    };
    myChart.setOption(option);
    setTimeout(() => {
      reshape(myChart, '.profile-metrics-collapseWrap');
    }, 100);
  });
  return <div style={{ height: '280px', width: '100%' }} ref={domRef} />;
};
export default memo(MetriesChart);
