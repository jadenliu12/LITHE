import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';
import {changeHair, changeEyes, changeNose, changeMouth, changeWomanBody, changeManBody} from 'states/avatar-actions.js';

import './generateAvatar.css';

class AvatarGenerator extends React.Component {
    static propTypes = {
        avatarHair: PropTypes.string,
        avatarEye: PropTypes.string,
        avatarNose: PropTypes.string,
        avatarMouth: PropTypes.string,
        avatarBodySource: PropTypes.string,
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
        this.generateWomanBody = this.generateWomanBody.bind(this);
        this.generateManBody = this.generateManBody.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Generate Avatar');
    }

    componentWillUnmount() {
        console.log('Unmount Generate Avatar')
    }

    render() {
        return (
            <div className="generateAvatar">
                <div className="top">
                    <div className="canvasContainer">
                        <div className="canvas">
                            <img className="hair" src={this.props.avatarHair}></img>
                            <img className="eye" src={this.props.avatarEye}></img>
                            <img className="nose" src={this.props.avatarNose}></img>
                            <img className="mouth" src={this.props.avatarMouth}></img>
                            <img className="body" src={this.props.avatarBodySource}></img>                             
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="generateButton" onClick={this.generateHair}>Hair</button>
                        <button className="generateButton" onClick={this.generateEyes}>Eyes</button>
                        <button className="generateButton" onClick={this.generateNose}>Nose</button>
                        <button className="generateButton" onClick={this.generateMouth}>Mouth</button>
                    </div>
                </div>
                <div className="gender">
                    <button className="femaleButton" onClick={this.generateWomanBody}>Female</button>
                    <button className="maleButton" onClick={this.generateManBody}>Male</button>
                    <button className="submitButton"><Link to="/set-body">Generate!</Link></button>
                </div>                
            </div>
        );
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

    generateWomanBody() {
        this.props.dispatch(changeWomanBody(1));
    }

    generateManBody() {
        this.props.dispatch(changeManBody(1));
    }
}

export default connect(state => ({
    ...state.avatar,
}))(AvatarGenerator);