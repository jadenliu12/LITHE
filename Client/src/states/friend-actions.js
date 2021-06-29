export function setAvailableUsers(users) {
    return {
        type: '@FRIENDS/SET_AVAILABLE_USERS',
        users
    };
}

export function setAvailableUsersInfo(usersInfo) {
    return {
        type: '@FRIENDS/SET_AVAILABLE_USERS_INFO',
        usersInfo
    };
}

export function setAvailableUsersAvatar(usersAvatar) {
    return {
        type: '@FRIENDS/SET_AVAILABLE_USERS_AVATAR',
        usersAvatar
    };
}

export function setCurrentUser(currentUser) {
    return {
        type: '@FRIENDS/SET_CURRENT_USER',
        currentUser
    };
}