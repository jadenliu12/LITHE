const initAuthState = {
    username: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
    email: '',
    authCode: '',
    formType: 'signIn',
    status: false    
};
export function auth(state = initAuthState, action) {
    switch (action.type) {
        case '@AUTH/ON_CHANGE':
            return {
                ...state,
                [action.e.name]: action.e.value,
                formType: state.formType
            };  
        case '@AUTH/CHECK_USER_SUC':
            return {
                ...state,
                email: action.email,
                username: action.username,
                formType: 'signedIn',
                status: true
            };
        case '@AUTH/SIGNED_IN':
            return {
                ...state,
                formType: 'signedIn',
                status: true
            };
        case '@AUTH/SIGN_IN':
            return {
                ...state,
                formType: 'signIn'
            }; 
        case '@AUTH/SIGN_UP':
            return {
                ...state,
                formType: 'signUp'
            }; 
        case '@AUTH/CONFIRM_SIGN_UP':
            return {
                ...state,
                formType: 'confirmSignUp'
            };         
        case '@AUTH/FORGOT_PASS':
            return {
                ...state,
                formType: 'forgot'
            }; 
        case '@AUTH/CONFIRM_FORGOT':
            return {
                ...state,
                formType: 'confirmForgot'
            };                                                                     
        default:
            return state;
    }
}

const initAuthWarningState = {
    warningUsername: false,
    warningEmail: 0,
    warningPassword: false,
    warningConfirmPassword: false,
    warningMessage: ''    
}
export function authWarn(state = initAuthWarningState, action) {    
    switch (action.type) {
        case '@AUTH_WARN/UPDATE_WARNING_USERNAME':
            return {
                ...state,
                warningUsername: action.val
            };  
        case '@AUTH_WARN/UPDATE_WARNING_PASSWORD':
            return {
                ...state,
                warningPassword: action.val
            };
        case '@AUTH_WARN/UPDATE_WARNING_CONFIRM_PASSWORD':
            return {
                ...state,
                warningConfirmPassword: action.val
            };
        case '@AUTH_WARN/UPDATE_WARNING_EMAIL':
            return {
                ...state,
                warningEmail: action.val
            };
        case '@AUTH_WARN/UPDATE_WARNING_MESSAGE':
            return {
                ...state,
                warningMessage: action.val
            };                                                               
        default:
            return state;
    }
}