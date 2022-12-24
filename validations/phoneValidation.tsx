export function maskPhoneNumber(phoneNumber: string) {
    console.log('phoneNumber', phoneNumber)
    const regex = /^(\d{3})(\d{3})(\d{2})(\d{2})$/;

    const match = regex.exec(phoneNumber);

    if (match) {
        return `+90(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    }

    return phoneNumber;
}


export function phoneValidate(phoneNumber: string) {
    const regex = /^\+90\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;
    const regex2 = /^\d{10}$/;

    const match2 = regex2.exec(phoneNumber);
    const match = regex.exec(phoneNumber);

    if (match) {
        if (phoneNumber[0] === '0') {
            return {
                status: 'danger',
                message: 'Phone number should not start with 0'
            };
        }
        return {
            status: 'success',
            message: 'Phone number is valid'
        };
    } else if (match == null && match2) {
        if (phoneNumber[0] === '0') {
            return {
                status: 'danger',
                message: 'Phone number should not start with 0'
            };
        }
        return {
            status: 'success',
            message: 'Phone number is valid'
        };
    }

    return {
        status: 'danger',
        message: 'Phone number should contain only digits and no more than 11 digits'
    };

}

