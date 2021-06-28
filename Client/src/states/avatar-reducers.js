const initAvatarState = {
    avatarHair: 'images/hair1.png',
    avatarEye: 'images/eye1.png',
    avatarNose: 'images/nose1.png',
    avatarMouth: 'images/mouth1.png',
    avatarWomanBodySource: '',
    avatarManBodySource: ''
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
                avatarWomanBodySource: "images/woman" + action.womanBodyNumber + ".png"
            };  
        case '@AVATAR/CHANGE_AVATAR_BODY_MAN':
            return {
                ...state,
                avatarManBodySource: "images/man" + action.manBodyNumber + ".png"
            };     
        case '@AVATAR/DELETE_AVATAR_BODY_WOMAN':
            return {
                ...state,
                avatarWomanBodySource: ""
            };  
        case '@AVATAR/DELETE_AVATAR_BODY_MAN':
            return {
                ...state,
                avatarManBodySource: ""
            };          
        default:
            return state;
    }
}
