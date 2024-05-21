export const capitalize = (str: string | undefined) => {
    if (!str) return '';
    const cap = str[0].toUpperCase();
    const remainingLetters = str.substring(1);
    return cap + remainingLetters;
}