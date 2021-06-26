//AUTH
export function onChange(e) {  
    return {
        type: '@AUTH/ON_CHANGE',
        e
    };    
}

export function checkUser(email, username) {    
    return {
        type: '@AUTH/CHECK_USER_SUC',
        email,
        username
    }
}

export function signedIn() {
    return {
        type: '@AUTH/SIGNED_IN',
    };        
}

export function signIn() {
    return {
        type: '@AUTH/SIGN_IN',
    };        
}

export function signUp() {
    return {
        type: '@AUTH/SIGN_UP',
    };        
}

export function confirmSignUp() {
    return {
        type: '@AUTH/CONFIRM_SIGN_UP',
    };        
}

export function forgotPassword() {
    return {
        type: '@AUTH/FORGOT_PASS',
    };        
}

export function confirmForgot() {
    return {
        type: '@AUTH/CONFIRM_FORGOT',
    };        
}

//AUTH WARNING
export function updateWarningUsername(val) {
    return {
        type: '@AUTH_WARN/UPDATE_WARNING_USERNAME',
        val
    }
}

export function updateWarningPassword(val) {
    return {
        type: '@AUTH_WARN/UPDATE_WARNING_PASSWORD',
        val
    }
}

export function updateWarningConfirmPassword(val) {
    return {
        type: '@AUTH_WARN/UPDATE_WARNING_CONFIRM_PASSWORD',
        val
    }
}

export function updateWarningEmail(val) {
    return {
        type: '@AUTH_WARN/UPDATE_WARNING_EMAIL',
        val
    }
}

export function updateWarningMessage(val) {
    return {
        type: '@AUTH_WARN/UPDATE_WARNING_MESSAGE',
        val
    }
}