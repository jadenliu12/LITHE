import React from 'react';

export default class Features extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        
    }

    componentDidMount() {
        console.log('Mount Features');
    }

    componentWillUnmount() {
        console.log('Unmount Features')
    }

    render() {
        return (
            <div className={`features`}>
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <h1>THIS IS FEATURES</h1>
                </div>
            </div>
        );
    }
}
