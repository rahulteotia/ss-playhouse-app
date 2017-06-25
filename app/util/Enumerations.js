export const ERROR_STATE = {
    NETWORK: {index: 0},
    NOT_FOUND: {index: 1},
    INTERNAL_SERVER_ERROR: {index: 2}
};



function getByIndex(enumType, index) {
    for (var enumKey in enumType) {
        const item = enumType[enumKey];
        if (typeof item != 'function' && item.index && item.index == index) {
            return item;
        }
    }
}

