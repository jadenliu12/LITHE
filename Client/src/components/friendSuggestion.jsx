import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes, { bool } from 'prop-types';
import {connect} from 'react-redux';

import {setAvailableUsers, setAvailableUsersInfo, setAvailableUsersAvatar, setCurrentUser} from 'states/friend-actions.js';
import {listUser} from 'api/user.js';
import {listUserInfo} from 'api/userInfo.js';
import {listUserAvatar} from 'api/userAvatar.js';

import FriendBox from 'components/friendBox.jsx';

import './friendSuggestion.css';

class FriendSuggestion extends React.Component {
    static propTypes = {    
        availableUsers: PropTypes.array,
        availableUsersInfo: PropTypes.array,
        availableUsersAvatar: PropTypes.array,
        usersFriend: PropTypes.array,
        username: PropTypes.string,
        currentUser: PropTypes.string,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
        this.users = []
        this.usersInfo = [];
        this.userAvatar = [];
    }   

    componentDidMount() {
        console.log('Mount Friend Suggestion'); 
        this.props.dispatch(setCurrentUser(this.props.username))           
        listUser()
        .then((users) => { 
            for (var i=0; i < users.length; i++) {
                console.log(users[i].username, this.props.currentUser)
                if(users[i].username !== this.props.currentUser)
                    this.users.push(users[i].username);
            }            
            this.props.dispatch(setAvailableUsers(this.users));            
            listUserInfo()   
            .then((usersInfo) => {
                for (var i=0; i < usersInfo.length; i++) {
                    if(usersInfo[i].username !== this.props.currentUser)
                        this.usersInfo.push({height: usersInfo[i].height, weight: usersInfo[i].weight});
                } 
                this.props.dispatch(setAvailableUsersInfo(this.usersInfo));       
                listUserAvatar()
                .then((userAvatar) => {                    
                    for (var i=0; i < userAvatar.length; i++) {
                        if(userAvatar[i].username !== this.props.currentUser)
                            this.userAvatar.push({hair: userAvatar[i].hair, eye: userAvatar[i].eye, nose: userAvatar[i].nose, mouth: userAvatar[i].mouth});
                    }   
                    this.props.dispatch(setAvailableUsersAvatar(this.userAvatar));            
                }) 
                .then(() => {
                    this.setState({loading: false});
                })
                .catch((err) => {
                    console.error('Error listing avatars', err);
                })                      
            })
            .catch((err) => {
                console.error('Error listing users', err);
            }); 
        })
        .catch((err) => {
            console.error('Error listing users', err);
        });       
    }

    componentWillUnmount() {
        console.log('Unmount Friend Suggestion')
    }

    render() {        
        let children = (
            <ListGroupItem className="empty d-flex justify-content-center align-items-center">
              <div className="empty-text">
                Please wait a moment...
              </div>
            </ListGroupItem>
        );
        if(!this.state.loading) {            
            children = this.props.availableUsers.map((name, index) => (     
                <ListGroupItem key={name} className="friend">
                    <FriendBox 
                        username={name} 
                        height={this.props.availableUsersInfo[index].height} 
                        weight={this.props.availableUsersInfo[index].weight} 
                        hair={this.props.availableUsersAvatar[index].hair}
                        eye={this.props.availableUsersAvatar[index].eye}
                        nose={this.props.availableUsersAvatar[index].nose}
                        mouth={this.props.availableUsersAvatar[index].mouth}
                    />
                </ListGroupItem>       
            )); 
            console.log(this.users) ;
        }     

        return (
            <div className="friendSuggestion">
                <ListGroup>
                    {children}
                </ListGroup>                
            </div>
        );
    }

}

export default connect(state => ({
    ...state.friends,
    username: state.auth.username
  }))(FriendSuggestion);