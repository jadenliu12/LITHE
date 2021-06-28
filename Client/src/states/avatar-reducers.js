const initAvatarState = {
    avatarHair: 'images/hair1.png',
    avatarEye: 'images/eye1.png',
    avatarNose: 'images/nose1.png',
    avatarMouth: 'images/mouth1.png',
    avatarBodySource: 'images/woman1.png'
};

export function avatar(state = initAvatarState, action) {
    switch (action.type) {
        case '@AVATAR/CHANGE_AVATAR_HAIR':
            return {
                ...state,
                avatarHair: "images/hair" + action.hairNum + ".png"
            };         
        case '@AVATAR/CHANGE_AVATAR_EYES':            
            return {
                ...state,
                avatarEye: "images/eye" + action.eyeNum + ".png"
            };    
        case '@AVATAR/CHANGE_AVATAR_NOSE':
            return {
                ...state,
                avatarNose: "images/nose" + action.noseNum + ".png"
            };    
        case '@AVATAR/CHANGE_AVATAR_MOUTH':
            return {
                ...state,
                avatarMouth: "images/mouth" + action.mouthNum + ".png"
            };     
        case '@AVATAR/CHANGE_AVATAR_BODY_WOMAN':
            return {
                ...state,
                avatarBodySource: "images/woman" + action.womanBodyNumber + ".png"
            };  
        case '@AVATAR/CHANGE_AVATAR_BODY_MAN':
            return {
                ...state,
                avatarBodySource: "images/man" + action.manBodyNumber + ".png"
            };              
        default:
            return state;
    }
}
