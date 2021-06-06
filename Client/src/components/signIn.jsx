import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Features from 'components/Features.jsx';

import './signIn.css';

export default class selectFood extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true,      
            confirmToggle: false,    
        };

        this.handleConfirmToggle = this.handleConfirmToggle.bind(this);  
    }

    componentDidMount() {
        console.log('Mount Features');
    }

    componentWillUnmount() {
        console.log('Unmount Features')
    }

    render() {
        return (
            <Router>
                <div className="userInput">
                    <div className="input" class="d-flex flex-wrap align-items-center justify-content-center">   
                        <div className="inputFood">
                            <h3 className="title">RECORD YOUR DAILY INTAKE!</h3>
                            <div className="inputSection">
                                <form onClick={this.handleCalorieToggle} >
                                    <label for="food">Food</label>
                                    <input type="text" id="foodName" name="findFood" placeholder="Search food"></input>
                                    
                                    <label for="calories">Calorie Intake</label>
                                    <input type="text" id="kcal" name="calorie" placeholder="0 kcal"></input>
                                    
                                    <label for="mililiters">Water Intake</label>
                                    <input type="text" id="ml" name="ml" placeholder="0 ml"></input>
                                    
                                    <label for="hours">Sleeping Duration</label>
                                    <input type="text" id="hrs" name="hr" placeholder="0 hrs"></input>
                                    
                                    <input to="/finish-search" className="button" type="submit" value="Confirm"></input>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <Route
                        exact
                        path="/finish-search"
                        render={() => (
                        <Features/>
                        )}
                    />
                </div>
            </Router>
        );
    }
    
    handleConfirmToggle() {
        this.setState((prevState, props) => ({
        calorieToggle: !prevState.calorieToggle,
        }));
    }
}

