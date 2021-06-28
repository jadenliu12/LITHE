import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';
import {changeHair, changeEyes, changeNose, changeMouth} from 'states/avatar-actions.js';
import {setHair, setEyes, setNose, setMouth} from 'states/setbody-actions.js';

import './generateAvatar.css';

class AvatarGenerator extends React.Component {
    static propTypes = {
        avatarHair: PropTypes.string,
        avatarEye: PropTypes.string,
        avatarNose: PropTypes.string,
        avatarMouth: PropTypes.string,
        
        avatarHairSource: PropTypes.string,
        avatarEyeSource: PropTypes.string,
        avatarNoseSource: PropTypes.string,
        avatarMouthSource: PropTypes.string,

        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);

        this.avatarHairNum = 1;
        this.avatarEyesNum = 1;
        this.avatarNoseNum = 1;
        this.avatarMouthNum = 1;

        this.generateHair = this.generateHair.bind(this);
        this.generateEyes = this.generateEyes.bind(this);
        this.generateNose = this.generateNose.bind(this);
        this.generateMouth = this.generateMouth.bind(this);

        this.generateAvatar = this.generateAvatar.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Generate Avatar');
        this.generateHair();
        this.generateEyes();
        this.generateNose();
        this.generateMouth();
        this.generateAvatar();
    }

    componentWillUnmount() {
        console.log('Unmount Generate Avatar')
    }

    generateHair() {
        this.avatarHairNum = (this.avatarHairNum === 8 ? 1 : this.avatarHairNum += 1);
        this.props.dispatch(changeHair(this.avatarHairNum));
    }

    generateEyes() {
        this.avatarEyesNum = (this.avatarEyesNum === 5 ? 1 : this.avatarEyesNum += 1);
        this.props.dispatch(changeEyes(this.avatarEyesNum));
    }

    generateNose() {
        this.avatarNoseNum = (this.avatarNoseNum === 3 ? 1 : this.avatarNoseNum += 1);
        this.props.dispatch(changeNose(this.avatarNoseNum));
    }

    generateMouth() {
        this.avatarMouthNum = (this.avatarMouthNum === 3 ? 1 : this.avatarMouthNum += 1);
        this.props.dispatch(changeMouth(this.avatarMouthNum));
    }

    generateAvatar() {
        this.props.dispatch(setHair(this.avatarHairNum));
        this.props.dispatch(setEyes(this.avatarEyesNum));
        this.props.dispatch(setNose(this.avatarNoseNum));
        this.props.dispatch(setMouth(this.avatarMouthNum));
        console.log(this.avatarHairNum);
        console.log(this.avatarEyesNum);
        console.log(this.avatarNoseNum);
        console.log(this.avatarMouthNum);
    }

    render() {
        return (
            // <Router>
            <div className="generateAvatar">
                <div className="canvas">
                    <img className="hair" src={this.props.avatarHair}></img>
                    <img className="eye" src={this.props.avatarEyes}></img>
                    <img className="nose" src={this.props.avatarNose}></img>
                    <img className="mouth" src={this.props.avatarMouth}></img>
                    <div className="userName">Name</div>
                </div>
                <div className="buttons">
                    <button className="generateButton" onClick={this.generateHair}>Hair</button>
                    <button className="generateButton" onClick={this.generateEyes}>Eyes</button>
                    <button className="generateButton" onClick={this.generateNose}>Nose</button>
                    <button className="generateButton" onClick={this.generateMouth}>Mouth</button>
                </div>
                <button className="submitButton" onClick={this.generateAvatar}>Generate!</button>
            </div>
            // </Router>
        );
    }
}

export default connect(state => ({
    ...state.avatar,
    ...state.setBody
}))(AvatarGenerator);