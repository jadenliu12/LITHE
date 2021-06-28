const initSetBodyState = {
    avatarHairSource: 'images/hair1.png',
    avatarEyeSource: 'images/eye1.png',
    avatarNoseSource: 'images/nose1.png',
    avatarMouthSource: 'images/mouth1.png',
    avatarBodySource: ''
};

export function setBody(state = initSetBodyState, action) {
    switch (action.type) {
        case '@SETBODY/SET_AVATAR_HAIR':
            return {
                ...state,
                avatarHairSource: "images/hair" + action.hairNumber + ".png"
            };         
        case '@SETBODY/SET_AVATAR_EYES':
            return {
                ...state,
                avatarEyeSource: "images/eye" + action.eyeNumber + ".png"
            };    
        case '@SETBODY/SET_AVATAR_NOSE':
            return {
                ...state,
                avatarNoseSource: "images/nose" + action.noseNumber + ".png"
            };    
        case '@SETBODY/SET_AVATAR_MOUTH':
            return {
                ...state,
                avatarMouthSource: "images/mouth" + action.mouthNumber + ".png"
            };  
        case '@SETBODY/SET_AVATAR_BODY_WOMAN':
            return {
                ...state,
                avatarBodySource: "images/woman" + action.womanBodyNumber + ".png"
            };  
        case '@SETBODY/SET_AVATAR_BODY_MAN':
            return {
                ...state,
                avatarBodySource: "images/man" + action.manBodyNumber + ".png"
            };  
        default:
            return state;
    }
}
