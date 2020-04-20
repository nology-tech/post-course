// 15: How do you find all permutations of a string?

export const allPermutations = (text: string) => {
  if (text.length < 2) {
    return text;
  }

  let permutationsList: string[] = [];

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let remainder = text.slice(0, i) + text.slice(i + 1);
    for (let permutation of allPermutations(remainder)) {
      permutationsList.push(char + permutation);
    }
  }
  return permutationsList;
};
