import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import CalorieBarChart from 'components/calorieChart.jsx';
import WaterBarChart from 'components/waterChart.jsx';
import SleepBarChart from 'components/sleepChart.jsx';

import './userHome.css';

export default class UserHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="userHome">
                <div className="input d-flex flex-wrap align-items-center justify-content-center"> 
                    <div className="userInfo">
                        <div className="icon"></div>
                        <div className="userName">Jaden</div>
                        <div className="userRank">Advanced</div>
                    </div>  
                    <div className="inputInfo">
                        <h3 className="today">YOUR DAILY RECORD</h3>
                        <div>
                            <form >
                                <label htmlFor="calories">Calorie Intake | <span><Link to="/user-search-food">Food Calorie Counter</Link> </span></label>
                                <input className="inputRecords" type="number"></input>
                                <select name="unitCal" className="unitChoices" defaultValue="Kcal">
                                    <option value="Kcal">KCal</option>
                                    <option value="Cal">Cal</option>
                                </select>                               
                                <div className="horizontalChart">
                                    <CalorieBarChart />
                                </div>

                                <label htmlFor="mililiters">Water Intake</label>
                                <input className="inputRecords" type="number"></input>
                                <select name="unitWater" className="unitChoices" defaultValue="ml">
                                    <option value="ml">ml</option>
                                    <option value="l">l</option>
                                </select>                                
                                <div className="horizontalChart">
                                    <WaterBarChart />
                                </div>

                                <label htmlFor="hours">Sleeping Duration</label>
                                <input className="inputRecords" type="number"></input>
                                <select name="unitSleep" className="unitChoices" defaultValue="Hrs">
                                    <option value="Hrs">Hrs</option>
                                    <option value="Mins">Mins</option>
                                </select>                                
                                <div className="horizontalChart">
                                    <SleepBarChart />
                                </div>                                    
                            </form>
                            <Link className="button" to="/user-search-food">Input</Link>                            
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}