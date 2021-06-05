import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import './sign.css';

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {            
            loading: true,
            masking: true
        };
        
    }

    componentDidMount() {
        console.log('Mount Sign Up');
    }

    componentWillUnmount() {
        console.log('Unmount Sign Up')
    }

    render() {
        return (
            <div className="signUp">
                <div className={`mask ${this.state.masking ? 'masking' : ''}`}>
                    <Form className="sign-form">
                        <h1 className="text-info">Lithe.</h1>
                        <FormGroup>
                            <Label>Email:</Label>
                            <Input type="email" placeholder="Email"></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Password:</Label>
                            <Input type="password" placeholder="Password"></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>Password Again:</Label>
                            <Input type="password" placeholder="Confirm Password"></Input>
                        </FormGroup>

                        <Button className="btn-lg btn-block">Next</Button>
                        
                        <div className="text-center">
                            <Link to="/signIn" className="text-muted">Already have an account? Sign in</Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
