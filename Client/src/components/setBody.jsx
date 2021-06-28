import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';
import {changeWomanBody, changeManBody, deleteWomanBody, deleteManBody} from 'states/avatar-actions.js';


import {signIn} from 'states/auth-actions.js';
import {onChange} from 'states/userInfo-actions.js';

import {createUserInfo, listUserInfo} from 'api/userInfo.js';

import './setBody.css';

class SetBody extends React.Component {
    static propTypes = {
        avatarHair: PropTypes.string,
        avatarEye: PropTypes.string,
        avatarNose: PropTypes.string,
        avatarMouth: PropTypes.string,
        avatarWomanBodySource: PropTypes.string,
        avatarManBodySource: PropTypes.string,
        username: PropTypes.string,
        height: PropTypes.number,
        weight: PropTypes.number,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);
        this.avatarBodyNum = 1;
        this.userBMI = 0;

        this.setBody = this.setBody.bind(this);

        this.signIn = this.signIn.bind(this);
        this.onChange = this.onChange.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Set Body');
    }

    componentWillUnmount() {
        console.log('Unmount Set Body')
    }
 
    setBody() {
        if(this.props.avatarWomanBodySource === "") {
            this.userBMI = ((this.weight) / (((this.height)/100)*((this.height)/100)));
            this.avatarBodyNum = (this.userBMI < 18.5 ? 1 : (18.5 <= this.userBMI <= 24.9) ? 2 : (25 <= this.userBMI <= 29.9) ? 3 : 4);
            this.props.dispatch(changeManBody(this.avatarBodyNum));
        }

        else if(this.props.avatarManBodySource === "") {
            this.userBMI = ((this.weight) / (((this.height)/100)*((this.height)/100)));
            this.avatarBodyNum = (this.userBMI < 18.5 ? 1 : (18.5 <= this.userBMI <= 24.9) ? 2 : (25 <= this.userBMI <= 29.9) ? 3 : 4);
            this.props.dispatch(changeWomanBody(this.avatarBodyNum));
        }
    }

    render() {
        return (
            <div className="generateBody">
                <div className="canvas">
                    <img className="hair" src={this.props.avatarHair}></img>
                    <img className="eye" src={this.props.avatarEye}></img>
                    <img className="nose" src={this.props.avatarNose}></img>
                    <img className="mouth" src={this.props.avatarMouth}></img>
                    <img className="womanBody" style={{display : this.props.avatarWomanBodySource === "" ? 'none' : 'block' }} src={this.props.avatarWomanBodySource}></img>
                    <img className="manBody" style={{display : this.props.avatarManBodySource === "" ? 'none' : 'block' }} src={this.props.avatarManBodySource}></img>
                </div>
                <div className="inputBody">
                    <div className="inputBox">
                        <input className="inputHeight" type="number" placeholder="Height (cm)" name="height" onChange={e => this.onChange(e)}></input>
                        <input className="inputWeight" type="number" placeholder="Weight (kg)" name="weight" onChange={e => this.onChange(e)}></input>
                    </div>
                    <button className="submitButton" onClick={this.signIn}><Link to="/sign-in">Confirm</Link></button>
                </div>
            </div>
        );
    }  

    onChange(e) {
        e.persist();        
        this.props.dispatch(onChange(e.target.name, Number(e.target.value)));
        if(this.props.height >= 100 && this.props.weight > 0) {
            this.setBody();
        }
    }

    signIn() {
        this.props.dispatch(signIn());
        createUserInfo(this.props.username, this.props.weight, this.props.height)
        .then(() => {
            listUserInfo()
                .then((usersInfo) => {
                    console.log(usersInfo);
                })
                .catch((err) => {
                    console.error('Error listing users', err);
                })
        })
        .catch((err) => {
            console.error('Error creating user', err);
        })        
    }
}

export default connect(state => ({
    ...state.avatar,
    ...state.userInfo,
    username: state.auth.username
}))(SetBody);