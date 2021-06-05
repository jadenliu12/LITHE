import React from 'react';

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
            <div className='top'>                
                <h1>LITHE</h1>
                <h3>Goals are met, friends are made.</h3>
                <p>Meet friends with the same goal along your journey in maintaining a healthy diet. Compete, Share, and Motivate each other along the way.</p>      
                <button>Start</button>                              
            </div>
        );
    }
}
