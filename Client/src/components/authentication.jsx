import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { 
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from "reactstrap";
import {connect} from 'react-redux';

import AvatarGenerator from 'components/generateAvatar.jsx';
import UserHome from 'components/userHome.jsx';
import {onChange, checkUser, signedIn, signIn, signUp, confirmSignUp, forgotPassword, confirmForgot, avatarGenerator} from 'states/auth-actions.js';
import {updateWarningUsername, updateWarningPassword, updateWarningConfirmPassword, updateWarningEmail, updateWarningMessage} from 'states/auth-actions.js';

import {createUser, listUser} from 'api/user.js';

import { Auth } from 'aws-amplify';

import './authentication.css';

class Authentication extends React.Component {
    static propTypes = {    
        username: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
        newPassword: PropTypes.string,
        email: PropTypes.string,
        authCode: PropTypes.string,
        formType: PropTypes.string,
        status: PropTypes.bool,       
        warningUsername: PropTypes.bool,
        warningEmail: PropTypes.number,
        warningPassword: PropTypes.bool,
        warningConfirmPassword: PropTypes.bool,
        warningMessage: PropTypes.string,
        store: PropTypes.object,
        dispatch: PropTypes.func
      };    

    constructor(props) {
        super(props);      

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
                    this.props.formType === 'signIn' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <h3 className="text-center">Welcome!</h3>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={e => this.onChange(e)} placeholder="Username" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Password:</Label>
                                    <Input name="password" type="password" onChange={e => this.onChange(e)} placeholder="Password" />                            
                                </FormGroup>
                                {
                                    this.props.warningMessage !== "" && 
                                    <div className="form-component alert alert-danger p-0 px-2">{this.props.warningMessage}</div>
                                }                                
                                <Button className="btn form-component" onClick={this.signIn}>Next</Button>

                                <div className="form-component">
                                    <div className="text-center">
                                        <span>Not registered? </span><a className="link" onClick={this.connectSignUp}>Create an account!</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="link" onClick={this.connectForgot}>Forgot your password?</a>
                                    </div>
                                </div>                                
                            </Form>
                        </div>
                    )
                }                 
                {
                    this.props.formType === 'forgot' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={e => this.onChange(e)} placeholder="username" />
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>New password:</Label>
                                    <Input name="newPassword" type="password" onChange={e => this.onChange(e)} placeholder="password" />
                                </FormGroup>

                                <Button className="btn btn-secondary btn-lg btn-block form-component" onClick={this.forgotPassword}>Next</Button>                                                                
                            </Form>                                                                                                            
                        </div>
                    )
                }   
                {
                    this.props.formType === 'confirmForgot' && (
                        <div className="form-container">    
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Confirmation code:</Label>
                                    <Input name="authCode" onChange={e => this.onChange(e)} placeholder="confirmation code" />
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
                    this.props.formType === 'signUp' && (
                        <div className="form-container">
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Username:</Label>
                                    <Input name="username" onChange={e => this.onChange(e)} placeholder="username" className={this.props.warningUsername ? 'border border-danger' : ''} />
                                    {
                                        this.props.warningUsername && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Username has already taken! Please change it!</div>
                                    }                                     
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Email:</Label>
                                    <Input name="email" onChange={e => this.onChange(e)} placeholder="email" className={this.props.warningEmail ? 'border border-danger' : ''} />
                                    {
                                        this.props.warningEmail === 1 && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Not allowed to use your email identity.</div>
                                    }
                                    {
                                        this.props.warningEmail === 2 && 
                                        <div className="form-component alert alert-danger p-0 px-2 ">Invalid email address format.</div>
                                    }
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Password:</Label>
                                    <Input name="password" type="password" onChange={e => this.onChange(e)} placeholder="password"
                                        minLength="6"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$"
                                        className={this.props.warningPassword ? 'border border-danger' : ''}
                                    />
                                    {
                                        this.props.warningPassword &&
                                        <div className="form-component alert alert-danger p-0 px-2">Password format is wrong.</div>
                                    }
                                </FormGroup>

                                <FormGroup className="form-component">
                                    <Label>Confirm Password:</Label>
                                    <Input name="confirmPassword" type="password" onChange={this.onChange} placeholder="confirm password" className={this.props.warningConfirmPassword ? 'border border-danger' : ''}/>
                                    {
                                        this.props.warningConfirmPassword &&
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
                    this.props.formType === 'confirmSignUp' && (
                        <div className="form-container">    
                            <Form className="sign-form">
                                <h1 className="text-info">Lithe.</h1>
                                <FormGroup className="form-component">
                                    <Label>Confirmation code:</Label>
                                    <Input name="authCode" onChange={e => this.onChange(e)} placeholder="confirmation code" />
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
                    this.props.formType === 'avatarGeneration' && (
                        <div className="form-container">
                            <AvatarGenerator />                            
                        </div>
                    )
                } 
                {
                    this.props.formType === 'signedIn' && (
                        <div className="form-container">
                            <UserHome />                            
                        </div>
                    )
                }                                            
            </div>
        )
    }

    onChange(e) {
        e.persist();
        this.props.dispatch(onChange(e.target));        

        if (e.target.name === "username") {            
            this.props.dispatch(updateWarningUsername(false));
            this.props.dispatch(updateWarningMessage(""));
        }        
        if (e.target.name === "confirmPassword") {            
            if (e.target.value ===  this.props.password) {
                this.props.dispatch(updateWarningConfirmPassword(false));
            }
        }
        if (e.target.name === "email") {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        
            if ( re.test(e.target.value) ) {                
                this.props.dispatch(updateWarningEmail(0));
            }
            else {                
                this.props.dispatch(updateWarningEmail(1));
            }
        }        
    }

    checkUser() {          
        Auth.currentAuthenticatedUser()
            .then((user) => {  
                this.props.dispatch(checkUser(user.attributes.email, user.username));
            })
            .catch(user => this.props.dispatch(signIn()));
    }

    connectSignIn() {
        this.props.dispatch(signIn());
    }

    connectSignUp() {
        this.props.dispatch(signUp());
    }

    connectForgot() {
        this.props.dispatch(forgotPassword());
    }

    resendCode() {        
        Auth.resendSignUp(this.props.username).then(console.log("resend code succesful"));
    }

    forgotPassword() {        
        Auth.forgotPassword(this.props.username).then(this.props.dispatch(confirmForgot()));
    }

    confirmForgot() {        
        Auth.forgotPasswordSubmit(this.props.username, this.props.authCode, this.props.newPassword).then(this.props.dispatch(signIn()));
    }

    confirmSignUp() {        
        Auth.confirmSignUp(this.props.username, this.props.authCode).then(this.props.dispatch(avatarGenerator()));        
    }    

    signUp() {
        const username = this.props.username, password = this.props.password, email = this.props.email, confirmPassword = this.props.confirmPassword;
        
        if (username !== "") {
            this.props.dispatch(updateWarningUsername(true));
        }
        if (password === confirmPassword ) {
            Auth.signUp({ 
                username,
                password, 
                attributes: { email } 
            })
            .catch(error => {
                if (error['code'] === "UsernameExistsException") {
                    this.props.dispatch(updateWarningUsername(true));
                }
                else if(error['code'] === "InvalidPasswordException") {
                    this.props.dispatch(updateWarningPassword(true));
                }
                else if(error['code'] === "InvalidEmailRoleAccessPolicyException") {
                    this.props.dispatch(updateWarningEmail(1));
                }
                else if(error["message"] === "Invalid email address format.") {
                    this.props.dispatch(updateWarningEmail(2));
                }
            })
            .then(fulfilled => {
                if (fulfilled !== undefined) {
                    console.log(fulfilled)
                    this.props.dispatch(confirmSignUp())
                }
            });
        }
        else {
            this.props.dispatch(updateWarningPassword(true));
        }        
    }    

    signIn() {    
        Auth.signIn(this.props.username, this.props.password)
        .then(user => {
            console.log("fulfilled:");
            this.props.dispatch(signedIn());
            createUser(user.username, user.attributes.email)
            .then(() => {
                listUser()
                    .then((users) => {
                        console.log(users);
                    })
                    .catch((err) => {
                        console.error('Error listing users', err);
                    })
            })
            .catch((err) => {
                console.error('Error creating user', err);
            })            
        })
        .catch(error => {
            this.props.dispatch(updateWarningUsername(true));
            if (error["code"] === "UserNotFoundException") {
                this.props.dispatch(updateWarningMessage("User does not exist."));
            }
            else if (error["code"] === "NotAuthorizedException") {
                this.props.dispatch(updateWarningMessage("Incorrect username or password."));
            }
            else if (error['code'] === "UserNotConfirmedException") {
                this.props.dispatch(updateWarningMessage("User is not confirmed."));  
                this.props.dispatch(confirmSignUp());
            }
            else if (error['code'] === "PasswordResetRequiredException") {                
                this.props.dispatch(updateWarningMessage("a password reset is required."));
            }
        });        
    }
}

export default connect(state => ({
    ...state.auth,
    ...state.authWarn,
}))(Authentication);