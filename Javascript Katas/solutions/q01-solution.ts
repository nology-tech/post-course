// 01 How do you find the missing numbers in a given integer array?

export function missingNumberInSequence(numberArray: number[]) {
  const matches: number[] = [];

  const sortedArray = numberArray.sort((a, b) => a - b);
  const firstNumber = sortedArray[0];
  const lastNumber = sortedArray[sortedArray.length - 1];

  for (let numIndex = firstNumber; numIndex < lastNumber; numIndex++) {
    if (sortedArray.indexOf(numIndex) === -1) {
      matches.push(numIndex);
    }
  }

  return matches;
}
