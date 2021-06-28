export function onChange(name, val) {  
    return {
        type: '@USER_INFO/ON_CHANGE',
        name,
        val
    };    
}
