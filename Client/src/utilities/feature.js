export function getFeatureIcon(group) {
    switch (group) {
        case 'Set Up':
            return 'fas fa-cog fa-4x';
        case 'Connect':
            return 'fas fa-link fa-4x';
        case 'Keep Track':
            return 'far fa-clock fa-4x';
        case 'Compete':
            return 'fas fa-people-arrows fa-4x';
        case 'Earn Points':
            return 'fas fa-coins fa-4x';
    }
}