//PROGRESS BAR
export function changeUnitCal(unit) {
    return {
        type: '@USER_HOME/CHANGE_UNIT_CAL',
        unit
    }
}

export function changeUnitSleep(unit) {
    return {
        type: '@USER_HOME/CHANGE_UNIT_SLEEP',
        unit
    }
}

export function changeUnitWater(unit) {
    return {
        type: '@USER_HOME/CHANGE_UNIT_WATER',
        unit
    }
}

export function updateData(cal, sleep, water) {
    return {
        type: '@USER_HOME/UPDATE_DATA',
        cal, sleep, water
    }
}