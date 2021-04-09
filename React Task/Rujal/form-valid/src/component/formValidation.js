export const validateField = (fields) => {
    let error = {};
    Object.keys(fields).forEach(field => {

        const element = document.getElementsByName(field)[0]
        const conditions = element?.getAttribute('validator')?.split(',') || []

        conditions && conditions.some(condition => {
            error[field] = validateError(condition, field, fields[field])
            return error[field] !== ""

        })
    })
    return error;
}

const validateError = (condition, name, value) => {
    switch (condition) {
        case 'required':
            return value.length === 0 ? `${name} is required` : ""
        case "isemailVlaid":
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return !emailRegex.test(value) ? `${name} is invalid` : ""
        case "mustBeDigit":
            const digitRegex = /^\d+$|^$/gi
            return !digitRegex.test(value) ? `${name} must be digit` : ""
        case "passwordValid":
            const passRegex = /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/
            return !passRegex.test(value) ? `Invalid ${name} format ` : ""
        default:
            return ""
    }
}

export const checkError = (error) => {
    return Object.values(error).some(x => x.length > 0)
}