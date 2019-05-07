// 07: How do you reverse an array in place in Javascript?

export let reverseWordsInSentence = (sentence: string): string => {
     return sentence.split(" ")
               .reverse()
               .join(" ");
};
