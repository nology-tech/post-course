// 10: How do you print the first non-repeated character from a string?

export const printFirstNonRepeat = (text: string): string => {
    for (let i = 0; i < text.length; i++) {
      if (text.indexOf(text.charAt(i)) == text.lastIndexOf(text.charAt(i))) {
        return text.charAt(i);
      }
    }
  };
  