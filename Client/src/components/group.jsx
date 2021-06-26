import React from 'react';
import ContactUs from 'components/contactUs.jsx'

import './aboutUs.css';

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
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                        </div>
                        <div className="row">
                            <p className="col-sm">user1</p>
                            <p className="col-sm">user2</p>
                            <p className="col-sm">user3</p>
                            <p className="col-sm">user4</p>
                        </div>
                        <div className="row">
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                            <div className="col-sm"><i className="fas fa-plus-circle fa-3x"></i></div>
                        </div>
                        
                        <div className="row">
                            <p className="col-sm">user5</p>
                            <p className="col-sm">user6</p>
                            <p className="col-sm">user7</p>
                            <p className="col-sm">user8</p>
                        </div>
                    </div>
                </div>
            </div>        
        );
    }
}