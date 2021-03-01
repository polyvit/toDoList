import {CONSTANTS} from "redux/constants";

export const isValid = (input) => {
    if (input.value === "") {
        return CONSTANTS.ERROR_EMPTY(input.title);
    }
    if (input.type === "tel" || input.name === 'phone') {
        const valid = input.value.replace(/[^0-9]/g, '').length > 10;
        if (!valid) {
            return CONSTANTS.ERROR_FORMAT_PHONE
        }
    }
    if (input.type === 'email' || input.name === 'email') {
        const valid = input.value.match(/[\w-]+@([\w-]+\.)+[\w-]{2,}/);
        if (!valid) {
            return CONSTANTS.ERROR_FORMAT_EMAIL
        }
    }
    return false;
}