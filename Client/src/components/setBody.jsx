import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import {signedIn} from 'states/auth-actions.js';
import {onChange} from 'states/userInfo-actions.js';

import {createUserInfo, listUserInfo} from 'api/userInfo.js';

import './setBody.css';

class SetBody extends React.Component {
    static propTypes = {
        avatarHair: PropTypes.string,
        avatarEye: PropTypes.string,
        avatarNose: PropTypes.string,
        avatarMouth: PropTypes.string,
        avatarBodySource: PropTypes.string,
        username: PropTypes.string,
        height: PropTypes.number,
        weight: PropTypes.number,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
        this.onChange = this.onChange.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Set Body');
    }

    componentWillUnmount() {
        console.log('Unmount Set Body')
    }
 
    render() {
        return (
            <div className="generateBody">
                <div className="canvas">
                    <img className="hair" src={this.props.avatarHair}></img>
                    <img className="eye" src={this.props.avatarEye}></img>
                    <img className="nose" src={this.props.avatarNose}></img>
                    <img className="mouth" src={this.props.avatarMouth}></img>
                    <img className="body" src={this.props.avatarBodySource}></img>
                </div>
                <div className="inputBody">
                    <div className="inputBox">
                        <input className="inputHeight" type="number" placeholder="Height (cm)" name="height" onChange={e => this.onChange(e)}></input>
                        <input className="inputWeight" type="number" placeholder="Weight (kg)" name="weight" onChange={e => this.onChange(e)}></input>
                    </div>
                    <button className="submitButton" onClick={this.signIn}><Link to="/user-home">Confirm</Link></button>
                </div>
            </div>
        );
    }  

    onChange(e) {
        e.persist();        
        this.props.dispatch(onChange(e.target.name, Number(e.target.value)));
    }

    signIn() {
        this.props.dispatch(signedIn());
        createUserInfo(this.props.username, this.props.weight, this.props.height, 0, 0, 0)
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