export interface Dataset {
  label: string;
  data: number[];
  backgroundColor?: string;
}

export interface ChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface IBarChartProps {
  title?: string;
  chartData: ChartData;
  maxColumn?: number;
  titlePosition?: 'top' | 'bottom';
  yText?: string;
  xText?: string;
  isDisplayLegend?: boolean;
}
