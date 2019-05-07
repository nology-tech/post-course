// 11: How do you check if a given string is a palindrome?

export let palindrome = (text: string):boolean => {
    const regexPattern =  /[^A-Za-z0-9]/g;
    const cleanString = text.toLowerCase().replace(regexPattern, "");
    const reversedString = cleanString.split("").reverse().join("");
    return cleanString === reversedString;
};
