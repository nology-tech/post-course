// 12: How can a given string be reversed using recursion?

export let reverseWithRecursion = (text: string):string => {
    return (text === "") ? "" : reverseWithRecursion(text.substr(1)) + text.charAt(0);
};
