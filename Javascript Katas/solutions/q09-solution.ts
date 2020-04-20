// 09: How do you check if two strings are anagrams of each other?

export const compareAnagrams = (word1: string, word2: string): boolean => {
    if (word1.length != word2.length) return false;
  
    word1 = word1
      .toLowerCase()
      .split("")
      .sort()
      .join();
  
    word2 = word2
      .toLowerCase()
      .split("")
      .sort()
      .join();
  
    return word1 === word2;
  };
  