import React from 'react';
import { BrowserRouter as Router, Route, Link, useHistory, useLocation } from 'react-router-dom';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import './sign.css';
import SignUp from "./signUp.jsx";

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        this.signin = this.signin.bind(this);
    }

    componentDidMount() {
        console.log('Mount Sign In');
    }

    componentWillUnmount() {
        console.log('Unmount Sign In')
    }

    signin() {
        // let history = useHistory();
        // let location = useLocation();
        
        // console.log("Histroy", history);
        // console.log("location", location);
    }

    render() {
        return (
            <div className="signIn">
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <Form className="sign-form">
                        <h1 className="text-info">Lithe.</h1>
                        <h3 className="text-center">Welcome</h3>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type="email" placeholder="Email"></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Password:</Label>
                            <Input type="password" placeholder="Password"></Input>
                        </FormGroup>
                        <Button className="btn-lg btn-block" onClick={this.signin}>Sign In</Button>

                        <div className="text-center">
                            <Link to="/signUp" className="text-muted">Not register? create an account</Link>
                        </div>
                        <div className="text-center">
                            <Link to="/signUp" className="text-muted">Forget your password?</Link>
                        </div>

                        <Route
                            exact
                            path="/signUp"
                            render={() => (
                            <SignUp/>
                            )}
                        />
                    </Form>
                </div>
            </div>
        );
    }
}
