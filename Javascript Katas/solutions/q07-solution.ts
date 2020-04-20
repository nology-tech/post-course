// 07: How do you reverse an array in place in Javascript?

export const reverseWordsInSentence = (sentence: string): string => {
     return sentence
       .split(" ")
       .reverse()
       .join(" ");
   };
   