// 11: How do you check if a given string is a palindrome?

export const palindrome = (text: string): boolean => {
    const regexPattern = /[^A-Za-z0-9]/g;
    const replacedString = text.toLowerCase().replace(regexPattern, "");
    const reversedText = replacedString
      .split("")
      .reverse()
      .join("");
    return replacedString === reversedText;
  };
  