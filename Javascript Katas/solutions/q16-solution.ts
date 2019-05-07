// 16: How do you check if a string contains only digits?

export let onlyDigits = (text: string) => {
// tslint:disable-next-line: radix
    return (parseInt(text).toString() === text);
};
