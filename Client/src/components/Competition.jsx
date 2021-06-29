import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Media } from 'reactstrap';

import GameBarChart from 'components/GameChart.jsx';

import './competition.css';

export default class Competition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="competition">
                <h1>Weekly Competition Result</h1>
                <div className="viewRewards"><button><Link to="/competition-reward">Champions</Link></button></div>
                <div className="userdata d-flex align-items-center"> 
                    <div className="horizontalChart"><GameBarChart/></div>
                </div>
            </div>
        );
    }
}