import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import './horizontalChart.css';


defaults.animation = false;

const data = {
  labels: [''],
  datasets: [
    {
      label: 'days',
      data: [3, 7],
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

const GameBarChart = () => (
  <>
    {/* <Col xs={6} md={4}>
      <Media object data-src="../dist/images/boy1.png"></Media>
    // </Col> */}
    <Bar data={data} 
        className="bar" 
        width={500}
        height={150}
        options={options} 
    />
  </>
);

export default GameBarChart;
