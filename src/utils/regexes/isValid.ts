export const isValidBirthDate = (str: string) => {
    const regex = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;
    return regex.test(str);
}

export const isValidPassport = (str: string) => {
    const regex = /\d{4}\d{6}/;
    return regex.test(str);
}

export const isValidBirthCertificate = (str: string) => {
    const regex = /^[IVXLCDM]{1,3}[-|s][А-ЯЁ]{2}[-|s]\d{6}$/;
    return regex.test(str);
}

export const isValidName = (str: string) => {
    const regex = /^[А-ЯЁ][а-яё]{0,30}(( |-)([А-ЯЁ][а-яё]{0,30})){0,2}$/;
    return regex.test(str);
}

export const isValidPhone = (str: string) => {
    const regex = /^(8|(\+7))\d{10}$/;
    return regex.test(str);
}

export const isValidEmail = (str: string) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(str);
}
