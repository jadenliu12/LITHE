import React from 'react';
import ChatBar from 'components/chatBar.jsx'
import ContactUs from 'components/contactUs.jsx'

import './aboutUs.css';

export default class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.toggleChat = 0;
        this.state = {            
            loading: false,
            masking: false
        };
        
    }

    componentDidMount() {
        console.log('Mount About Us');
    }

    componentWillUnmount() {
        console.log('Unmount About Us')
    }

    toggleChatWindow() {
        this.toggleChat = ~this.toggleChat;
        ChatBar.openChat(this.toggleChat);
    }

    render() {
        return (
            <div className="aboutUs">
                <div className="top">                
                    <div className="img">
                        <h3>TEAM PHOTO</h3>
                    </div>                             
                </div>
                <div className="middle">
                    <ContactUs/>
                </div>              
            </div>        
        );
    }
}