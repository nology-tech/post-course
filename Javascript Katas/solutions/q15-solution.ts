// 15: How do you find all permutations of a string?

export let allPermutations = (text: string) => {
        const results: string[] = [];

        if (text.length === 1) {
          results.push(text);
          return results;
        }

        text.split("")
          .forEach((firstChar, index) => {
            const charsLeft = text.substring(0, index) + text.substring(index + 1);
            allPermutations(charsLeft)
              .forEach((permutation) => {
                results.push(firstChar + permutation);
              });
          });

        return results;
};
