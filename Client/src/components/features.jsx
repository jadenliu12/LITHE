import React from 'react';
import FeatureItem from 'components/featureItem.jsx';

import './features.css';

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
            <div className="features">                
                <FeatureItem className="f-item" title="Set Up" desc="Enter basic information for us to generate your personalized avatar and set a suitable target for you"/>
                <FeatureItem className="f-item" title="Connect" desc="Connect with family, friends, or even strangers who meet the same target as you"/>
                <FeatureItem className="f-item" title="Keep Track" desc="Take good care of your avatar by constantly recording your daily calorie and water intake, and also your sleeping schedule"/>
                <FeatureItem className="f-item" title="Compete" desc="Participate in our built-in games to know your weekly summary, and to track both yours and your friend's progress"/>
                <FeatureItem className="f-item" title="Earn Points" desc="Earn points once you have reached your target or when you win in a competition against your friend"/>
            </div>
        );
    }
}