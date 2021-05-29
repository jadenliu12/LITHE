import React from 'react';

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
            <div className={`aboutUs`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <h1>THIS IS CONTACT US</h1>
                </div>
            </div>
        );
    }
}
