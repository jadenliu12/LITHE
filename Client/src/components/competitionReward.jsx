import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Media } from 'reactstrap';

import RewardChart from 'components/rewardChart.jsx';

import './competitionReward.css';

export default class CompetitionReward extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="competitionReward">
                <div className="d-flex flex-column align-items-center">
                    <div className="container">
                        <div className="col-2 mx-auto Place">
                            <figure>
                                <img src="images/medal1.png" className="userImage"></img>
                                <figcaption>Jaden</figcaption>
                            </figure>
                            
                        </div>
                        <div className="row justify-content-around">
                            <div className="col-2 Place">
                                <figure>
                                    <img src="images/medal2.png" className="userImage"></img>
                                    <figcaption>Michelle</figcaption>
                                </figure>
                            </div>
                            <div className="col-2 Place">
                                <figure>
                                    <img src="images/medal3.png" className="userImage"></img>
                                    <figcaption>admin</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="userdata d-flex align-items-center">
                        <div className="horizontalChart">
                            <RewardChart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}