import React from 'react';
import HorizontalBarChart from 'components/horizontalChart.jsx';

import './friendProfile.css';

export default class FriendProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        
    }

    componentDidMount() {
        console.log('Mount Friend Profile');
    }

    componentWillUnmount() {
        console.log('Unmount Friend Profile')
    }

    render() {
        return (
            <div className="friendProfile">
                <div className="user" class="d-flex justify-content-center"> 
                    <div className="userInfo">
                        <div className="icon"></div>
                        <div className="userName">Jaden</div>
                        <div className="userRank">Advanced</div>
                    </div>  
                    <div className="addUser">
                        <div>FRIENDS</div>
                        <div>1000</div>
                        <div className="button">Add Friend</div>
                    </div>
                </div>
                <div className="horizontalChart">
                    <HorizontalBarChart />
                </div>
            </div>
        );
    }
}
