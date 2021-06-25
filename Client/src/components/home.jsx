import React from 'react';
import CalendarHeatMap from 'components/calendarHeatmap.jsx';

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
            <div className="calendar">
                <h1>Statistics</h1>
                <h5>150 days</h5>
                <div className="heatmap"><CalendarHeatMap /></div>
                <div className="colorIndicator">
                    <p>Target Indicators</p>
                    <div className="colors">
                        <inline className="color0"></inline>
                        <inline>0% - 20%</inline>
                        <inline className="color1"></inline>
                        <inline>21% - 40%</inline>
                        <inline className="color2"></inline>
                        <inline>41% - 60%</inline>
                        <inline className="color3"></inline>
                        <inline>61% - 80%</inline>
                        <inline className="color4"></inline>
                        <inline>81% - 100%</inline>
                    </div>
                </div>
            </div>        
        );
    }
}
