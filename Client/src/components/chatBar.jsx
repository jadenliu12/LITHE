import React from 'react';
// import ContactUs from 'components/contactUs.jsx'

import './chatBar.css';

export default class ChatBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: false,
            masking: false
        };

        // this.openChat.addEventListener("click", this.openChat.bind(this));
    }

    componentDidMount() {
        console.log('Mount Chat Bar');
    }

    componentWillUnmount() {
        console.log('Unmount Chat Bar')
    }

    openChat(toggleChat) {
        if(toggleChat === 0)
            <div className="chatWindow" style="visible"></div>
        else
            <div className="chatWindow" style="hidden"></div>
    }

    // render() {
    //     return (
    //     );
    // }
}