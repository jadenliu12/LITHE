import React from 'react';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';
import {changeWomanBody, changeManBody, deleteWomanBody, deleteManBody} from 'states/avatar-actions.js';


import './setBody.css';

class SetBody extends React.Component {
    static propTypes = {
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

        this.avatarBodyNum = 1;

        this.setBody = this.setBody.bind(this);
    }   

    componentDidMount() {
        console.log('Mount Set Body');
    }

    componentWillUnmount() {
        console.log('Unmount Set Body')
    }
 
    setBody() {
        if(this.props.avatarWomanBodySource === "") {
            this.avatarBodyNum = (this.avatarBodyNum === 4 ? 1 : this.avatarBodyNum += 1);
            this.props.dispatch(changeManBody(this.avatarBodyNum));
        }

        else if(this.props.avatarManBodySource === "") {
            this.avatarBodyNum = (this.avatarBodyNum === 4 ? 1 : this.avatarBodyNum += 1);
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
                        <input className="inputHeight" type="number" placeholder="Height (cm)"></input>
                        <input className="inputWeight" type="number" placeholder="Weight (kg)"></input>
                    </div>
                    <button className="submitButton" onClick={this.setBody}>Confirm</button>
                </div>
            </div>
        );
    }  
}

export default connect(state => ({
    ...state.avatar,
}))(SetBody);