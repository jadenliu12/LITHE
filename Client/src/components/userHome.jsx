import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import CalorieBarChart from 'components/calorieChart.jsx';
import WaterBarChart from 'components/waterChart.jsx';
import SleepBarChart from 'components/sleepChart.jsx';

import {changeUnitCal, changeUnitSleep, changeUnitWater, updateData, setData} from 'states/userHome-actions.js';
import {setAvatar} from 'states/avatar-actions.js';
import {listUserInfo, updateNutrition} from 'api/userInfo.js';
import {listUserAvatar} from 'api/userAvatar.js';

import './userHome.css';

class UserHome extends React.Component {
    static propTypes = {    
        dataCal: PropTypes.object,
        dataSleep: PropTypes.object,
        dataWater: PropTypes.object,
        username: PropTypes.string,

        avatarHair: PropTypes.string,
        avatarEye: PropTypes.string,
        avatarNose: PropTypes.string,
        avatarMouth: PropTypes.string,
        avatarWomanBodySource: PropTypes.string,
        avatarManBodySource: PropTypes.string,

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
        console.log(this.props.avatarWomanBodySource);
        listUserInfo()
            .then((usersInfo) => {
                for (var i=0; i < usersInfo.length; i++) {
                    if (usersInfo[i].username === this.props.username) {
                        this.props.dispatch(setData(usersInfo[i].calories, usersInfo[i].sleep, usersInfo[i].water));
                        break;
                    }
                }                
            })
            .catch((err) => {
                console.error('Error listing users', err);
            })  
        listUserAvatar()
            .then((userAvatar) => {
                for (var i=0; i < userAvatar.length; i++) {
                    if (userAvatar[i].username === this.props.username) {
                        this.props.dispatch(setAvatar(userAvatar[i].hair, userAvatar[i].eye, userAvatar[i].nose, userAvatar[i].mouth, userAvatar[i].body, userAvatar[i].gender));
                        break;
                    }
                }        
            }) 
            .catch((err) => {
                console.error('Error listing avatars', err);
            })    
    }

    render() {
        return (
            <div className="userHome">
                <div className="icon">
                    <div className="background"></div>
                    <img className="hair" src={this.props.avatarHair}></img>
                    <img className="eye" src={this.props.avatarEye}></img>
                    <img className="nose" src={this.props.avatarNose}></img>
                    <img className="mouth" src={this.props.avatarMouth}></img>
                    <img className="womanBody" style={{display : this.props.avatarWomanBodySource === "" ? 'none' : 'block' }} src={this.props.avatarWomanBodySource}></img>                             
                    <img className="manBody" style={{display : this.props.avatarManBodySource === "" ? 'none' : 'block' }} src={this.props.avatarManBodySource}></img>
                </div>
                <div className="input d-flex flex-wrap align-items-center justify-content-center"> 
                    <div className="userInfo">
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
        updateNutrition(this.props.username, 
                        (this.props.dataCal.datasets[0].label === 'KCal' ? this.props.dataCal.datasets[0].data[0] : this.props.dataCal.datasets[0].data[0]/1000) + (cal.value === '' ? 0 : this.props.dataCal.datasets[0].label === 'Cal' ? Number(cal.value)/1000 : Number(cal.value)), 
                        (this.props.dataSleep.datasets[0].label === 'Hrs' ? this.props.dataSleep.datasets[0].data[0] : this.props.dataSleep.datasets[0].data[0]/60) + (sleep.value === '' ? 0 : this.props.dataSleep.datasets[0].label === 'Mins' ? Number(sleep.value)/60 : Number(sleep.value)), 
                        (this.props.dataWater.datasets[0].label === 'ml' ? this.props.dataWater.datasets[0].data[0] : this.props.dataWater.datasets[0].data[0]*1000) + (water.value === '' ? 0 : this.props.dataWater.datasets[0].label === 'l' ? Number(water.value)*1000 : Number(water.value))
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
    ...state.avatar,
    username: state.auth.username
  }))(UserHome);
