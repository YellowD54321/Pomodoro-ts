import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IBarChartProps } from './BarChart.types';
import StyledBarChart from './BarChart.styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({
  chartData,
  title = '',
  maxColumn = 10,
  titlePosition = 'top',
  yText = '',
  xText = '',
  isDisplayLegend = true,
}: IBarChartProps) => {
  const isDisplayTitle = (): boolean => {
    return !!title;
  };

  const isDisplayYText = (): boolean => {
    return !!yText;
  };

  const isDisplayXText = (): boolean => {
    return !!xText;
  };

  const DefaultBackgroundColor = [
    'rgba(0,130,195)',
    'rgba(206,42,75)',
    'rgba(155,187,88)',
  ];

  const datasets = chartData.datasets.map((data, index) => {
    const backgroundColor =
      data?.backgroundColor ||
      DefaultBackgroundColor[index % DefaultBackgroundColor.length];
    const maxBarThickness = 15;
    return {
      ...data,
      backgroundColor,
      maxBarThickness,
    };
  });

  const data = {
    ...chartData,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    categoryPercentage: 0.5,
    barPercentage: 0.8,
    scales: {
      x: {
        ticks: {
          // the grid line is between each bar.
          // it won't display if it is the number of bar.
          // needs to be on more than maxColumn.
          maxTicksLimit: maxColumn + 1,
        },
        title: {
          display: isDisplayXText(),
          text: xText,
          font: {
            size: 20,
            weight: 'bold',
          },
        },
      },
      y: {
        beginAtZero: true,
        grace: 1,
        ticks: {
          precision: 0,
        },
        title: {
          display: isDisplayYText(),
          text: yText,
          font: {
            size: 20,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      title: {
        display: isDisplayTitle(),
        text: title,
        position: titlePosition,
        font: {
          size: 30,
          weight: 'normal',
        },
      },
      legend: {
        display: isDisplayLegend,
      },
    },
  };

  return (
    <StyledBarChart>
      <Bar data={data} options={options} />
    </StyledBarChart>
  );
};

export default BarChart;
