import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';
import {setWomanBody, setManBody} from 'states/setbody-actions.js';

import './setBody.css';

class SetBody extends React.Component {
    static propTypes = {
        avatarHairSource: PropTypes.string,
        avatarEyeSource: PropTypes.string,
        avatarNoseSource: PropTypes.string,
        avatarMouthSource: PropTypes.string,
        avatarBodySource: PropTypes.string,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);

        this.womanBodyNum = 1;
        this.manBodyNum = 1;
        this.female = false;
        this.male = false;
        this.setBody = this.setBody.bind(this);
        this.setGenderFemale = this.setGenderFemale.bind(this);
        this.setGenderMale = this.setGenderMale.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Set Body');
        this.setBody();
    }

    componentWillUnmount() {
        console.log('Unmount Set Body')
    }

    setBody() {
        if(this.female) {
            this.womanBodyNum = 1;
            this.props.dispatch(setWomanBody(this.womanBodyNum));
        }

        else if(this.male) {
            this.manBodyNum = 1;
            this.props.dispatch(setManBody(this.manBodyNum));
        }
    }

    setGenderMale() {
        this.female = false;
        this.male = true;
    }
    
    setGenderFemale() {
        this.female = true;
        this.male = false;
    }
 
    render() {
        return (
            // <Router>
            <div className="generateBody">
                <div className="canvas">
                    <img className="hair" src={this.props.avatarHairSource}></img>
                    <img className="eye" src={this.props.avatarEyeSource}></img>
                    <img className="nose" src={this.props.avatarNoseSource}></img>
                    <img className="mouth" src={this.props.avatarMouthSource}></img>
                    <img className="body" src={this.props.avatarBodySource}></img>
                </div>
                <div className="inputBody">
                    <input className="inputWeight" type="text"></input>
                    <div className="gender">
                        <button className="femaleButton" onClick={this.setGenderFemale}>Female</button>
                        <button className="maleButton" onClick={this.setGenderMale}>Male</button>
                    </div>
                    <button className="submitButton" onClick={this.setBody}>Submit</button>
                </div>
            </div>
            // </Router>
        );
    }
}

export default connect(state => ({
    ...state.avatar,
    ...state.setBody,
}))(SetBody);