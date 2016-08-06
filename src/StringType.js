import Type from './Type';

class StringType extends Type {
    static from(s) {
        return s + '';
    }

    constructor(errorMessage = 'no error message') {
        super('string');
        super.addValidator(v => typeof v === 'string', errorMessage);
    }

    isLongerThan(n, errorMessage) {
        super.addValidator(v => v.length > n, errorMessage);
        return this;
    }

    containsLetter(errorMessage) {
        super.addValidator(v => /[a-zA-Z]/.test(v), errorMessage);
        return this;
    }

    containsUppercaseLetter(errorMessage) {
        super.addValidator(v => /[A-Z]/.test(v), errorMessage);
        return this;
    }

    containsLowercaseLetter(errorMessage) {
        super.addValidator(v => /[a-z]/.test(v), errorMessage);
        return this;
    }

    containsLetterOnly(errorMessage) {
        super.addValidator(v => /^[a-zA-Z]+$/.test(v), errorMessage);
        return this;
    }

    containsNumber(errorMessage) {
        super.addValidator(v => /[0-9]/.test(v), errorMessage);
        return this;
    }

    isOneOf(strArr, errorMessage) {
        super.addValidator(v => strArr.includes(v), errorMessage);
        return this;
    }

    isEmail(errorMessage) {
        let re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        super.addValidator(v => re.test(v), errorMessage);
        return this;
    }

    isURL() {
        let re = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        super.addValidator(v => re.test(v), errorMessage);
        return this;
    }

    pattern(regexp, errorMessage) {
        super.addValidator(value => regexp.test(value), errorMessage);
        return this;
    }

    rangeLength(minLength, maxLength, errorMessage) {
        super.addValidator(value => value.length >= minLength && value.length <= maxLength, errorMessage);
        return this;
    }

    minLength(minLength, errorMessage) {
        super.addValidator(value => value.length >= minLength, errorMessage);
        return this;
    }

    maxLength(maxLength, errorMessage) {
        super.addValidator(value => value.length <= maxLength, errorMessage);
        return this;
    }

}

export default (errorMessage) => new StringType(errorMessage);