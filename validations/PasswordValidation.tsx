export function passwordValidation(password: string) {

    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;
    const match = regex.exec(password);

    if (match) {
        return {status: 'success'};
    } else {
        return {
            status: 'danger',
            message: 'The password must be between 6-20 Decimals and alphanumeric',
        };
    }
}

export function passwordCheckValidate(password1: string, password2: string) {
    if (password1 !== password2) {
        return {
            status: 'danger',
            message: 'Passwords do not match'
        };
    }

    return {
        status: 'success',
        message: 'Passwords match'
    };
}
