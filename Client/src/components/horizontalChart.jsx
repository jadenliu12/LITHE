import React from 'react';
import { Bar } from 'react-chartjs-2';

import './horizontalChart.css';

const data = {
  labels: ['CALORIES', 'MILILITERS', 'HOURS'],
  datasets: [
    {
      label: '%',
      data: [70, 80, 90, 100],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y', //x=vertical
  elements: {
    bar: {
      borderWidth: 0.1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <div className="title">Jaden's Statistics</div>
    <Bar data={data} className="bar" options={options} />
  </>
);

export default HorizontalBarChart;