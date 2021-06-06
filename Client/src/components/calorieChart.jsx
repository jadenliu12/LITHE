import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

import './horizontalChart.css';

defaults.animation = false;

const data = {
  labels: [''],
  datasets: [
    {
      label: 'kcal',
      data: [1000, 2200],
      backgroundColor: [
        'rgba(51, 31, 0, 0.5)',
      ],
      borderColor: [
        'rgba(51, 31, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y', //x=vertical
  elements: false,
  responsive: true,
  plugins:{
    legend: {
        position: 'right',
        },
    },
  maintainAspectRatio: false
};

const CalorieBarChart = () => (
  <>
    <Bar data={data} 
        className="bar" 
        width={400}
        height={50}
        options={options} 
    />
  </>
);

export default CalorieBarChart;
