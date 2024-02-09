import { ChartData } from '../../components/chart/barChart/BarChart.types';

export interface IChartData {
  labels: ChartData['labels'];
  datas: number[];
}

export type IDateFilter = 'week' | 'month';
