import React from 'react';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

import { Auth, Hub } from 'aws-amplify';

import './authentication.css';

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);

        this.state = {                                    
            username: '',
            password: '',
            newPassword: '',
            email: '',
            authCode: '',
            formType: 'signIn',
            status: false
        };        

        this.onChange = this.onChange.bind(this);        

        this.connectSignIn = this.connectSignIn.bind(this);
        this.connectSignUp = this.connectSignUp.bind(this);
        this.connectForgot = this.connectForgot.bind(this);

        this.resendCode = this.resendCode.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);

        this.confirmForgot = this.confirmForgot.bind(this);
        this.confirmSignUp = this.confirmSignUp.bind(this);

        this.signUp = this.signUp.bind(this);        
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.checkUser = this.checkUser.bind(this);
    }  
    
    componentDidMount() {
        this.checkUser();
    }

    componentWillUnmount() {
        this.checkUser();
    }    

    render() {
        return (
            <div className="auth-container">
                {
                    this.state.formType === 'signIn' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <h3 className="text-center">Welcome</h3>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={this.onChange} placeholder="username" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Password:</Label>
                                    <Input name="password" type="password" onChange={this.onChange} placeholder="password" />                            
                                </FormGroup>
                                <Button className="btn form-component" onClick={this.signIn}>Next</Button>

                                <div className="form-component">
                                    <div className="text-center">
                                        <span>Not register? </span><a className="link" onClick={this.connectSignUp}>create an account</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="link" onClick={this.connectForgot}>Forget your password?</a>
                                    </div>
                                </div>
                            </Form>                                                                                                                 
                        </div>
                    )
                }                 
                {
                    this.state.formType === 'forgot' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={this.onChange} placeholder="username" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>New password:</Label>
                                    <Input name="newPassword" type="password" onChange={this.onChange} placeholder="password" />
                                </FormGroup>

                                <Button className="btn btn-secondary btn-lg btn-block form-component" onClick={this.forgotPassword}>Next</Button>                                                                
                            </Form>                                                                                                            
                        </div>
                    )
                }   
                {
                    this.state.formType === 'confirmForgot' && (
                        <div className="form-container">    
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Confirmation code:</Label>
                                    <Input name="authCode" onChange={this.onChange} placeholder="confirmation code" />
                                </FormGroup>

                                <Button className="btn btn-secondary btn-lg btn-block form-component" onClick={this.confirmForgot}>Complete Forgot Password</Button>   

                                <div className="form-component">
                                    <div className="text-center">
                                        <span>Didn't receive the code? </span><a className="link" onClick={this.resendCode}>resend</a>
                                    </div>
                                </div>                                                                                             
                            </Form>                                                                                                                                         
                        </div>
                    )
                }                             
                {
                    this.state.formType === 'signUp' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={this.onChange} placeholder="username" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Email:</Label>
                                    <Input name="email" onChange={this.onChange} placeholder="email" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Password:</Label>
                                    <Input name="password" type="password" onChange={this.onChange} placeholder="password" />
                                </FormGroup>

                                <Button className="btn btn-secondary btn-lg btn-block form-component" onClick={this.signUp}>Next</Button>     

                                <div className="form-component">
                                    <div className="text-center">
                                        <span>Already have an account? </span><a className="link" onClick={this.connectSignIn}>sign in</a>
                                    </div>
                                </div>                                                           
                            </Form>                                                                                                            
                        </div>
                    )
                }
                {
                    this.state.formType === 'confirmSignUp' && (
                        <div className="form-container">    
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Confirmation code:</Label>
                                    <Input name="authCode" onChange={this.onChange} placeholder="confirmation code" />
                                </FormGroup>

                                <Button className="btn btn-secondary btn-lg btn-block form-component" onClick={this.confirmSignUp}>Complete Sign Up</Button>   

                                <div className="form-component">
                                    <div className="text-center">
                                        <span>Didn't receive the code? </span><a className="link" onClick={this.resendCode}>resend</a>
                                    </div>
                                </div>                                                                                             
                            </Form>                                                                                                                                         
                        </div>
                    )
                }                    
                {
                    this.state.formType === 'signedIn' && (
                        <div className="form-container">
                            <h1>HELLO WORLD!</h1>
                            <button onClick={this.signOut}>Sign Out</button>
                        </div>
                    )
                }                             
            </div>
        )
    }

    onChange(e) {
        e.persist();
        this.setState({[e.target.name]: e.target.value})
    }

    checkUser() {
        Auth.currentAuthenticatedUser()
            .then(user => this.setState({email: user.attributes.email ,username: user.username, formType: "signedIn"}))
            .catch(user => this.setState({formType: "signIn"}));
    }

    connectSignIn() {
        this.setState({formType: "signIn"});
    }

    connectSignUp() {
        this.setState({formType: "signUp"});
    }

    connectForgot() {
        this.setState({formType: "forgot"});
    }

    resendCode() {
        const { username } = this.state;
        Auth.resendSignUp(username).then(console.log("resend code succesful"));
    }

    forgotPassword() {
        const { username } = this.state;
        Auth.forgotPassword(username).then(this.setState({formType: "confirmForgot"}));
    }

    confirmForgot() {
        const { username, authCode, newPassword } = this.state;
        Auth.forgotPasswordSubmit(username, authCode, newPassword).then(this.setState({formType: "signIn"}));
    }

    confirmSignUp() {
        const { username, authCode } = this.state;
        Auth.confirmSignUp(username, authCode).then(this.setState({formType: "signIn"}));        
    }    

    signUp() {
        const { username, email, password } = this.state;
        Auth.signUp({ username, password, attributes: { email } }).then(this.setState({formType: "confirmSignUp"}));
    }    

    signIn() {
        const { username, password } = this.state;
        Auth.signIn(username, password).then(this.setState({formType: "signedIn"}));        
    }

    signOut() {
        Auth.signOut().then(window.location.reload());
    }
}