import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import CalorieBarChart from 'components/calorieChart.jsx';
import WaterBarChart from 'components/waterChart.jsx';
import SleepBarChart from 'components/sleepChart.jsx';

import {changeUnitCal, changeUnitSleep, changeUnitWater, updateData, setData} from 'states/userHome-actions.js';
import {listUserInfo, updateNutrition} from 'api/userInfo.js';

import './userHome.css';

class UserHome extends React.Component {
    static propTypes = {    
        dataCal: PropTypes.object,
        dataSleep: PropTypes.object,
        dataWater: PropTypes.object,
        username: PropTypes.string,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };

    constructor(props) {
        super(props);

        this.changeUnitCal = this.changeUnitCal.bind(this);
        this.changeUnitSleep = this.changeUnitSleep.bind(this);
        this.changeUnitWater = this.changeUnitWater.bind(this);      
        
        this.checkInput = this.checkInput.bind(this);
    }

    componentDidMount() {
        listUserInfo()
            .then((usersInfo) => {
                for (var i=0; i < usersInfo.length; i++) {
                    if (usersInfo[i].username === this.props.username) {
                        this.props.dispatch(setData(usersInfo[i].calories, usersInfo[i].sleep, usersInfo[i].water));
                    }
                }                
            })
            .catch((err) => {
                console.error('Error listing users', err);
            })        
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
                                <input className="inputRecords" id="calInput" type="number"></input>
                                <select name="unitCal" className="unitChoices" defaultValue="KCal" onClick={this.changeUnitCal}>
                                    <option value="KCal">KCal</option>
                                    <option value="Cal">Cal</option>
                                </select>                               
                                <div className="horizontalChart">
                                    <CalorieBarChart />
                                </div>

                                <label htmlFor="mililiters">Water Intake</label>
                                <input className="inputRecords" id="waterInput" type="number"></input>
                                <select name="unitWater" className="unitChoices" defaultValue="ml"  onClick={this.changeUnitWater}>
                                    <option value="ml">ml</option>
                                    <option value="l">l</option>
                                </select>                                
                                <div className="horizontalChart">
                                    <WaterBarChart />
                                </div>

                                <label htmlFor="hours">Sleeping Duration</label>
                                <input className="inputRecords" id="SleepInput" type="number"></input>
                                <select name="unitSleep" className="unitChoices" defaultValue="Hrs" onClick={this.changeUnitSleep}>
                                    <option value="Hrs">Hrs</option>
                                    <option value="Mins">Mins</option>
                                </select>                                
                                <div className="horizontalChart">
                                    <SleepBarChart />
                                </div>                                    
                            </form>
                            <button className="button" onClick={this.checkInput}>Input</button>                                                        
                        </div>
                    </div>
                </div> 
            </div>
        );
    }

    changeUnitCal(e) {
        this.props.dispatch(changeUnitCal(e.target.value));
    }

    changeUnitSleep(e) {
        this.props.dispatch(changeUnitSleep(e.target.value));
    }

    changeUnitWater(e) {
        this.props.dispatch(changeUnitWater(e.target.value));
    }

    checkInput() {
        const cal = document.getElementById("calInput");
        const water = document.getElementById("waterInput");
        const sleep = document.getElementById("SleepInput");
        this.props.dispatch(updateData(cal.value, sleep.value, water.value));        
        updateNutrition(this.props.username, this.props.dataCal.datasets[0].data[0] + Number(cal.value), 
                        this.props.dataSleep.datasets[0].data[0] + Number(sleep.value), 
                        this.props.dataWater.datasets[0].data[0] + Number(water.value)
                        )
            .then((nutritionInfo) => {
                console.log(nutritionInfo);
            })
            .catch((err) => {
                console.error('Error listing users', err);
            }) 
        cal.value = "";
        water.value = "";
        sleep.value = "";
    }
}

export default connect(state => ({
    ...state.calProgress,
    ...state.sleepProgress,
    ...state.waterProgress,
    username: state.auth.username
  }))(UserHome);
