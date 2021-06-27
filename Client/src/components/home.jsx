import React from 'react';
import Features from 'components/features.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './home.css';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: false,
            masking: false
        };
        
    }

    componentDidMount() {
        console.log('Mount Home');
    }

    componentWillUnmount() {
        console.log('Unmount Home')
    }

    render() {
        return (
            <div className="webHome">
                <div className="top">                
                    <h1>LITHE</h1>
                    <h3>Goals are met, friends are made.</h3>
                    <p>Meet friends with the same goal along your journey in maintaining a healthy diet. Compete, Share, and Motivate each other along the way.</p>      
                    <Link to="/sign-in"><button>Start</button></Link>
                </div>
                <div className="middle">
                    <Features/>
                </div>              
            </div>        
        );
    }
}