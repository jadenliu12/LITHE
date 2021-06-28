import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from 'reactstrap';
import {connect} from 'react-redux';

import Home from 'components/home.jsx';
import AboutUs from 'components/aboutUs.jsx';
import Authentication from 'components/authentication.jsx'
import UserHome from 'components/userHome.jsx';
import UserSearchFood from 'components/userSearchFood.jsx';
import Statistics from 'components/statistics.jsx';
import Group from 'components/group.jsx';
import AvatarGenerator from 'components/generateAvatar.jsx';
import SetBody from 'components/setBody.jsx';

import {checkUser} from 'states/auth-actions.js';
import {toggleNavbar} from 'states/main-actions.js';

import { Auth } from 'aws-amplify';

import './Main.css';

class Main extends React.Component {
  static propTypes = {        
    navbarToggle: PropTypes.bool,
    username: PropTypes.string,
    status: PropTypes.bool,
    store: PropTypes.object,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);  

    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);  
    this.checkUser = this.checkUser.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.checkUser();
    console.log(this.props.status);
  }   

  render() {
    return (
      <Router>
        <div className="main bg-faded">
          <div className="container">
            <Navbar color="faded" light expand="md">
              <NavbarToggler onClick={this.handleNavbarToggle} />
              <NavbarBrand className="text-info" href={this.props.status ? "/user-home" : "/"}>
                LITHE
              </NavbarBrand>
              <Collapse className={this.props.status ? "" : "justify-content-end"} isOpen={this.props.navbarToggle} navbar>       
                <Nav navbar>
                  {
                    !this.props.status &&
                    <div className="navbar">
                      <NavItem>
                        <NavLink tag={Link} to="/">
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="/about-us">
                          About Us
                        </NavLink>
                      </NavItem>                  
                      <NavItem>
                        <NavLink tag={Link} to="/sign-in">
                          Sign In
                        </NavLink>
                      </NavItem>
                    </div>
                  } 
                  {
                    this.props.status &&
                    <div className="navbar"> 
                      <NavItem>
                        <NavLink tag={Link} to="/user-home">
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="/group">
                          Group
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="/competition">
                          Competition
                        </NavLink>
                      </NavItem>                      
                      <NavItem>
                        <NavLink tag={Link} to="/statistics">
                          Statistics
                        </NavLink>
                      </NavItem>                                        
                    </div>
                  } 
                </Nav>                          
              </Collapse>
              {
                this.props.status &&
                <div className="left-nav ml-auto">
                  <div className='search ml-auto'>
                    <Input className='ml-auto' type='text' placeholder='Search' onKeyPress={this.handleSearchKeyPress} innerRef={e => this.searchEl = e}></Input>
                  </div>                 
                  <div className="signOutButton">
                    <Button variant="secondary" onClick={this.signOut}>
                      Sign Out
                    </Button>
                  </div>
                </div>
              }
            </Navbar>
          </div>

          <Route
            exact
            path="/"
            render={() => (
              <AvatarGenerator/>
            )}
          />
          <Route
            exact
            path="/about-us"
            render={() => (
              <SetBody/>
            )}
          />          
          <Route
            exact
            path="/sign-in"
            render={() => (
              <Authentication/>
            )}
          />
          <Route
            exact
            path="/user-home"
            render={() => (
              <UserHome/>
            )}
          /> 
          <Route
            exact
            path="/user-search-food"
            render={() => (
              <UserSearchFood/>
            )}
          />
          <Route
            exact
            path="/group"
            render={() => (
              <Group/>
            )}
          /> 
          <Route
            exact
            path="/statistics"
            render={() => (
              <Statistics/>
            )}
          /> 
          <Route
            exact
            path="/avatar-generator"
            render={() => (
              <AvatarGenerator/>
            )}
          /> 
          <Route
            exact
            path="/set-body"
            render={() => (
              <SetBody/>
            )}
          />                                                            
        </div>
      </Router>
    );
  }

  handleNavbarToggle() {    
    this.props.dispatch(toggleNavbar());
  }

  signOut() {
    Auth.signOut()
    .then(
      window.location.reload());
      window.location.href = '/';
    ;
  }

  checkUser() {    
    Auth.currentAuthenticatedUser()
    .then(user => this.props.dispatch(checkUser(user.attributes.email, user.email))) 
  }
}

export default connect(state => ({
  ...state.main,
  username: state.auth.username,
  status: state.auth.status
}))(Main);