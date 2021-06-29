import React from 'react';
import ContactUs from 'components/contactUs.jsx'

import './group.css';

export default class Group extends React.Component {

    constructor(props) {
        super(props);

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

    render() {
        return (
            <div className="aboutUs">
                <h1>My Group</h1>
                <div className="users">
                    <div className="datas">
                        <div className="row">
                            <div className="col-sm"><img src="images/avatar2.png"></img></div>
                            <div className="col-sm"><img src="images/avatar1.png"></img></div>
                            <div className="col-sm"><img src="images/avatar3.png"></img></div>
                            <div className="col-sm"><img src="images/avatar4.png"></img></div>
                        </div>
                        <div className="row">
                            <p className="col-sm">Jaden</p>
                            <p className="col-sm">Michelle</p>
                            <p className="col-sm">admin</p>
                            <p className="col-sm">anoy</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"><img src="images/avatar5.png"></img></div>
                            <div className="col-sm"><img src="images/avatar6.png"></img></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                        </div>
                        
                        <div className="row">
                            <p className="col-sm">anoy1</p>
                            <p className="col-sm">anoy2</p>
                            <p className="col-sm"></p>
                            <p className="col-sm"></p>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}