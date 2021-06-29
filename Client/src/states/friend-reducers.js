const initFriendState = {
    availableUsers: [],
    availableUsersInfo: [],
    availableUsersAvatar: [],
    usersFriend: [],
    currentUser: ''
};

export function friends(state = initFriendState, action) {
    switch (action.type) {
        case '@FRIENDS/SET_AVAILABLE_USERS':
            return {
                ...state,
                availableUsers: action.users
            };
        case '@FRIENDS/SET_AVAILABLE_USERS_INFO':
            return {
                ...state,
                availableUsersInfo: action.usersInfo
            };
        case '@FRIENDS/SET_AVAILABLE_USERS_AVATAR':
            return {
                ...state,
                availableUsersAvatar: action.usersAvatar
            };
        case '@FRIENDS/SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser
            };                                     
        default:
            return state;
    }
}
