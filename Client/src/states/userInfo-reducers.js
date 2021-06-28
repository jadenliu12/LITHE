const initUserInfoState = {
    height: 0,
    weight: 0
}

export function userInfo(state = initUserInfoState, action) {
    switch(action.type) {
        case '@USER_INFO/ON_CHANGE':
            return {
                ...state,
                [action.name]: action.val
            };
        default:
            return state;
    }
}