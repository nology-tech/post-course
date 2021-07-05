// 13. How do you check if two strings are a rotation of each other?

export const areRotations = (text1: string, text2: string): boolean => {
    const concatenedText = text1.concat(text1);
    return concatenedText.indexOf(text2) !== -1 ? true : false;
  };
  