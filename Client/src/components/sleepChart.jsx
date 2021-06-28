import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import './horizontalChart.css';

defaults.animation = false;

class SleepBarChart extends React.Component {
  static propTypes = {    
    dataSleep: PropTypes.object,
    store: PropTypes.object,
    dispatch: PropTypes.func
  };  

  constructor(props) {
    super(props);

    this.options = {
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

  }

  render() {
    return (
      <>
        <Bar data={this.props.dataSleep} 
            className="bar" 
            width={400}
            height={50}
            options={this.options} 
        />
      </>
    );
  }
}

export default connect(state => ({
  ...state.sleepProgress,
}))(SleepBarChart);