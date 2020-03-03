
export const phoneValidator = {
    getMessage() {
        return `The ${field} must be either a valid phone number`;
    },

    validate() {
        const patt = /^([+]39)?((3[\d]{2})([ ,\-,\/]){0,1}([\d, ]{6,9}))|(((0[\d]{1,4}))([ ,\-,\/]){0,1}([\d, ]{5,10}))$/;

        return patt.test(value);
    }
}