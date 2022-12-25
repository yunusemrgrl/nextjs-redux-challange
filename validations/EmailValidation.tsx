export function emailValidation(email: string) {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const match = regex.exec(email);

    if (match) {
        return {status: 'success'};
    } else {
        return {
            status: 'danger',
            message: 'Please enter a valid email address',
        };
    }
}