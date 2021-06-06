import React from 'react';
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

import Home from 'components/home.jsx';
import AboutUs from 'components/aboutUs.jsx';
import Authentication from 'components/authentication.jsx'

import './Main.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      navbarToggle: false,      
    };    

    this.handleNavbarToggle = this.handleNavbarToggle.bind(this);        
  }

  render() {
    return (
      <Router>
        <div className="main bg-faded">
          <div className="container">
            <Navbar color="faded" light expand="md">
              <NavbarToggler onClick={this.handleNavbarToggle} />
              <NavbarBrand className="text-info" href="/">
                LITHE
              </NavbarBrand>
              <Collapse className="justify-content-end" isOpen={this.state.navbarToggle} navbar>
                <Nav navbar>
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
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <Route
            exact
            path="/"
            render={() => (
              <Home/>
            )}
          />
          <Route
            exact
            path="/about-us"
            render={() => (
              <AboutUs/>
            )}
          />          
          <Route
            exact
            path="/sign-in"
            render={() => (
              <Authentication/>
            )}
          />          
        </div>
      </Router>
    );
  }

  handleNavbarToggle() {
    this.setState((prevState, props) => ({
      navbarToggle: !prevState.navbarToggle,
    }));
  }
}
