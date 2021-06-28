import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import './friendSuggestion.css';

class FriendSuggestion extends React.Component {
    constructor(props) {
        super(props);
    }   

    componentDidMount() {
        console.log('Mount Friend Suggestion');
    }

    componentWillUnmount() {
        console.log('Unmount Friend Suggestion')
    }

    render() {
        return (
            <div className="friendSuggestion">
                <div className="d-flex flex-lg-row flex-column m-10">
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userWeight">Weight</div>
                                <div className="userHeight">Height</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>    
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>   
                </div>        
                <div className="d-flex flex-lg-row flex-column m-10">
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>    
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>   
                </div>        
                     
                <div className="d-flex flex-lg-row flex-column m-10">
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>    
                    <div className="friend">
                        <div className="canvasContainer">
                            <div className="canvas"></div>
                            <div className="userData">
                                <div className="userName">Name</div>
                                <div className="userHeight">Height</div>
                                <div className="userWeight">Weight</div>
                            </div>
                        </div>
                        <button className="addFriend"><Link to="/friend-profile">View Profile</Link></button>
                    </div>   
                </div>        
            </div>
        );
    }

}

export default connect(state => ({
    ...state.avatar,
    username: state.auth.username
}))(FriendSuggestion);