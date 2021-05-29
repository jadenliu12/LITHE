import React from 'react';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        
    }

    componentDidMount() {
        console.log('Mount Sign In');
    }

    componentWillUnmount() {
        console.log('Unmount Sign In')
    }

    render() {
        return (
            <div className={`signIn`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <h1>THIS IS SIGN IN</h1>
                </div>
            </div>
        );
    }
}
