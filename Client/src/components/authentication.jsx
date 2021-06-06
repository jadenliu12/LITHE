import React from 'react';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";

import { Auth, Hub } from 'aws-amplify';

import './authentication.css';
import { combineReducers } from 'redux';

export default class Authentication extends React.Component {

    constructor(props) {
        super(props);

        this.state = {                                    
            username: '',
            password: '',
            confirmPassword: '',
            newPassword: '',
            email: '',
            authCode: '',
            formType: 'signIn',
            status: false,
            warningUsername: false,
            warningEmail: 0,
            warningPassword: false,
            warningConfirmPassword: false,
            signInMessage: ""
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
                                {
                                    (this.state.signInMessage !== "") && 
                                    <div className="form-component alert alert-danger p-0 px-2">{this.state.signInMessage}</div>
                                }
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
                                    <Input name="username" onChange={this.onChange} placeholder="username" className={
                                        this.state.warningUsername? 'border border-danger' : ''
                                    }/>
                                    {
                                        this.state.warningUsername && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Username has already taken! Please change it!</div>
                                    }   
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Email:</Label>
                                    <Input name="email" onChange={this.onChange} placeholder="email" className={
                                        this.state.warningEmail? 'border border-danger' : ''
                                    }/>
                                    {
                                        this.state.warningEmail === 1 && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Not allowed to use your email identity.</div>
                                    }
                                    {
                                        this.state.warningEmail === 2 && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Invalid email address format.</div>
                                    }
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Password:</Label>
                                    <Input name="password" type="password" onChange={this.onChange} 
                                        minLength="6"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"
                                        placeholder="password" className={
                                        this.state.warningPassword? 'border border-danger' : ''
                                    }/>
                                    {
                                        this.state.warningPassword &&
                                        <div className="form-component alert alert-danger p-0 px-2">Password format is wrong.</div>
                                    }
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Confirm Password:</Label>
                                    <Input name="confirmPassword" type="password" onChange={this.onChange} placeholder="confirm password" className={
                                        this.state.warningConfirmPassword? 'border border-danger' : ''
                                    }/>
                                    {
                                        this.state.warningConfirmPassword &&
                                        <div className="form-component alert alert-danger p-0 px-2">Please make sure your password match</div>
                                    }
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
        
        if (e.target.name === "username") {
            this.setState({warningUsername: false, signInMessage: ""});
        }
        // check confirm password === password
        if (e.target.name === "confirmPassword") {
            const { password } = this.state;
            if (e.target.value ===  password) {
                this.setState({warningConfirmPassword: false});
            }
        }
        if (e.target.name === "email") {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            // this is a valid email address
            if ( re.test(e.target.value) ) {
                this.setState({warningEmail: 0});
            }
            else {
                // invalid email, maybe show an error to the user.
                this.setState({warningEmail: 1});
            }
        }
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
        const { username, email, password, confirmPassword } = this.state;
        //console.log(password, " v.s ", confirmPassword)

        //check username should not be empty
        if (username !== "") {
            this.setState({warningUsername: true});
        }
        // check the password and the confirmPassword
        if (password === confirmPassword ) {
            Auth.signUp({ 
                username,
                password, 
                attributes: { email } 
            })
            .catch(error => {
                if (error['code'] === "UsernameExistsException") {
                    this.setState({warningUsername: true});
                }
                else if(error['code'] === "InvalidPasswordException") {
                    this.setState({warningPassword: true});
                }
                else if(error['code'] === "InvalidEmailRoleAccessPolicyException") {
                    this.setState({warningEmail: 1});
                }
                else if(error["message"] === "Invalid email address format.") {
                    this.setState({warningEmail: 2});
                }
                console.log(error);
            })
            .then(fulfilled => {
                // successfully create user
                if (fulfilled !== undefined) {
                    console.log(fulfilled)
                    this.setState({formType: "confirmSignUp"})
                }
            });
        }
        else {
            this.setState({warningConfirmPassword: true});
        }
    }    

    signIn() {
        const { username, password } = this.state;
        try {
            Auth.signIn(username, password)
            .then(fulfilled => {
                console.log("fulfilled:");
                console.log(fulfilled);
                this.setState({formType: "signedIn"})
            })
            .catch(error => {
                console.log("inner error", error);
                if (error["code"] === "UserNotFoundException") {
                    this.setState({signInMessage: "User does not exist."});
                }
                else if (error["code"] === "NotAuthorizedException") {
                    this.setState({signInMessage: "Incorrect username or password."});
                }
                else if (error['code'] === "UserNotConfirmedException") {
                    this.setState({
                        signInMessage: "User is not confirmed.",
                        formType: "confirmSignUp"});
                }
                else if (error['code'] === "PasswordResetRequiredException") {
                    this.setState({signInMessage: "a password reset is required."});
                }
                console.log(this.state.signInMessage);
            });
        } catch (error) {
            console.log("outer error", error);
        };
        
    }

    signOut() {
        Auth.signOut().then(window.location.reload());
    }
}