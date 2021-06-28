import React from 'react';

import './contactUs.css'

export default class ContactUs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        
    }

    componentDidMount() {
        console.log('Mount Contact Us');
    }

    componentWillUnmount() {
        console.log('Unmount Contact Us')
    }

    render() {
        return (
            <div className="contactUs">                
                <p>Enter your feedbacks here for further help us to improve LITHE.</p>           
                <form id="contact-form">
                    <div className="form-group name">                        
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-group email">                        
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-text">                        
                        <textarea rows="5" placeholder="Enter your feedbacks" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>                
            </div>
        );
    }
}