import React from 'react';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import './setBody.css';

class SetBody extends React.Component {
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
                        <input className="inputHeight" type="number" placeholder="Height (cm)"></input>
                        <input className="inputWeight" type="number" placeholder="Weight (kg)"></input>
                    </div>
                    <button className="submitButton">Confirm</button>
                </div>
            </div>
        );
    }  
}

export default connect(state => ({
    ...state.avatar,
}))(SetBody);