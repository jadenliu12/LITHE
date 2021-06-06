import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CalorieBarChart from 'components/calorieChart.jsx';
import WaterBarChart from 'components/waterChart.jsx';
import SleepBarChart from 'components/sleepChart.jsx';

import './userHome.css';

export default class UserHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true,      
            calorieToggle: false,    
        };

        this.handleCalorieToggle = this.handleCalorieToggle.bind(this);  
    }

    componentDidMount() {
        console.log('Mount Features');
    }

    componentWillUnmount() {
        console.log('Unmount Features')
    }

    render() {
        return (
            <Router>
                <div className="features">
                <div className="input" class="d-flex flex-wrap align-items-center justify-content-center"> 
                    <div className="userInfo">
                        <div className="icon"></div>
                        <div className="userName">Jaden</div>
                        <div className="userRank">Advanced</div>
                    </div>  
                    <div className="inputInfo">
                        <h3 className="today">YOUR DAILY RECORD</h3>
                        <div>
                            <form onClick={this.handleCalorieToggle} >
                                <label for="calories">Calorie Intake</label>
                                <div className="inputRecords">0 kcal</div>
                                <div className="horizontalChart">
                                    <CalorieBarChart />
                                </div>

                                <label for="mililiters">Water Intake</label>
                                <div className="inputRecords">0 ml</div>
                                <div className="horizontalChart">
                                    <WaterBarChart />
                                </div>

                                <label for="hours">Sleeping Duration</label>
                                <div className="inputRecords">0 hrs</div>
                                <div className="horizontalChart">
                                    <SleepBarChart />
                                </div>

                                <input to="/user-input" className="button" type="submit" value="Input"></input>
                            </form>
                        </div>
                    </div>
                </div>
                
                <Route
                    exact
                    path="/user-input"
                    render={() => (
                    <userInput/>
                    )}
                />
            </div>
            </Router>
        );
    }
    
    handleCalorieToggle() {
        this.setState((prevState, props) => ({
        calorieToggle: !prevState.calorieToggle,
        }));
    }
}

