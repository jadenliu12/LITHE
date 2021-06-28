import React from 'react';

import './userSearchFood.css';

export default class UserSearchFood extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            confirmToggle: false,    
        };


        this.handleConfirmToggle = this.handleConfirmToggle.bind(this);  
    }

    componentDidMount() {
        console.log('Mount Features');
    }

    componentWillUnmount() {
        console.log('Unmount Features');
    }

    render() {
        return (
            <div className="userInput">
                <div className="input d-flex flex-wrap align-items-center justify-content-center">   
                    <div className="inputFood">
                        <h3 className="title">RECORD YOUR DAILY INTAKE!</h3>
                        <div className="inputSection">
                            <form onClick={this.handleCalorieToggle} >
                                <label htmlFor="food">Food</label>
                                <input type="text" id="foodName" name="findFood" placeholder="Search food"></input>

                                <label htmlFor="calories">Calorie Intake</label>
                                <input type="text" id="kcal" name="calorie" placeholder="0 kcal"></input>

                                <label htmlFor="mililiters">Water Intake</label>
                                <input type="text" id="ml" name="ml" placeholder="0 ml"></input>

                                <label htmlFor="hours">Sleeping Duration</label>
                                <input type="text" id="hrs" name="hr" placeholder="0 hrs"></input>

                                <input to="/finish-search" className="button" type="submit" value="Confirm"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleConfirmToggle() {
        this.setState((prevState, props) => ({
        calorieToggle: !prevState.calorieToggle,
        }));
    }
}