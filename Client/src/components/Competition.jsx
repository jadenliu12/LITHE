import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Media } from 'reactstrap';

// import CalorieBarChart from 'components/calorieChart.jsx';
// import WaterBarChart from 'components/waterChart.jsx';
import GameBarChart from 'components/GameChart.jsx';

import './Competition.css';

export default class Competition extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="competition">
                <div className="d-flex flex-column align-items-center">
                    <div className="container">
                        {/* <div className="row justify-content-center"> */}
                            <div className="col-2 mx-auto Place">
                                <figure>
                                    <img src="images/boy1.png" className="userImage"></img>
                                    <figcaption>username</figcaption>
                                    <img src="images/1st.png" className="userPlace"></img>
                                </figure>
                                
                            </div>
                        {/* </div> */}
                        <div className="row justify-content-around">
                            <div className="col-2 Place">
                                <figure>
                                    <img src="images/boy2.png" className="userImage"></img>
                                    <figcaption>username</figcaption>
                                    <img src="images/2st.png" className="userPlace"></img>
                                </figure>
                            </div>
                            <div className="col-2 Place">
                                <figure>
                                    <img src="images/boy3.png" className="userImage"></img>
                                    <figcaption>username</figcaption>
                                    <img src="images/3st.png" className="userPlace"></img>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="userdata d-flex align-items-center"> 
                        <figure>
                            <img src="images/boy1.png" className="userImage"></img>
                            <figcaption>username</figcaption>
                        </figure>
                        <div className="horizontalChart">
                            <GameBarChart/>
                        </div>
                        <div>
                            1100 / 2000 kcal
                        </div>
                    </div>
                    <div className="userdata d-flex align-items-center">
                        <figure>
                            <img src="images/boy2.png" className="userImage"></img>
                            <figcaption>username</figcaption>
                        </figure>
                        <div className="horizontalChart">
                            <GameBarChart />
                        </div> 
                        <div>
                            1100 / 2000 kcal
                        </div>
                    </div>
                    <div className="userdata d-flex align-items-center">
                        <figure>
                            <img src="images/boy3.png" className="userImage"></img>
                            <figcaption>username</figcaption>
                        </figure>
                        <div className="horizontalChart">
                            <GameBarChart />
                        </div> 
                        <div>
                            1100 / 2000 kcal
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

{/* <Media>
                            <Media object data-src="images/boy1.png"/>
                            <Media bottom>username</Media>
                        </Media> */}