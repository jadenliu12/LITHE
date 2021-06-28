export function changeHair(hairNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_HAIR',
        hairNum
    };
}

export function changeEyes(eyeNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_EYES',
        eyeNum
    };
}

export function changeNose(noseNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_NOSE',
        noseNum
    };
}

export function changeMouth(mouthNum) {
    return {
        type: '@AVATAR/CHANGE_AVATAR_MOUTH',
        mouthNum
    };
}