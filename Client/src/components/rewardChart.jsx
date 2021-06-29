import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import './horizontalChart.css';


defaults.animation = false;

const data = {
  labels: ['Jaden', 'Michelle', 'admin'],
  datasets: [
    {
      label: 'days',
      data: [7, 6, 5],
      backgroundColor: [
        'rgba(150, 45, 45, 0.5)',
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
        display: false
        },
    },
  maintainAspectRatio: false
};

const RewardChart = () => (
  <>
    <Bar data={data} 
        className="bar" 
        width={1000}
        height={300}
        options={options} 
    />
  </>
);

export default RewardChart;
