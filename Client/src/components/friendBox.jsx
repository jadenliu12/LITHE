import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './friendBox.css';

export default class FriendBox extends React.Component {

    constructor(props) {
        super(props);       
    }

    render() {
        return (
            <div className="friend">
                <div className="canvasContainer">
                    <div className="canvas">
                        <img className="hair" src={this.props.hair}></img>
                        <img className="eye" src={this.props.eye}></img>
                        <img className="nose" src={this.props.nose}></img>
                        <img className="mouth" src={this.props.mouth}></img>                        
                    </div>
                    <div className="userData">
                        <div className="userName">{this.props.username}</div>
                        <div className="infoContainer">
                            <div className="userHeight">{this.props.height}cm </div>
                            <div className="userWeight">{this.props.weight}kg </div>                            
                        </div>
                        <button className="addFriend">Add to Group</button>
                    </div>
                </div>                
            </div>
        );
    }
}
