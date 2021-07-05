// 06: How do you find all pairs of an integer array whose sum is equal to a given number?

export const findPairsWhichSum = (
  numberArray: number[],
  goal: number
): number[][] => {
  return [...new Set(numberArray)]
    .filter(currentNumber => {
      if (goal / 2 > currentNumber) {
        return false;
      }
      if (goal / 2 === currentNumber) {
        return numberArray.filter(item => currentNumber === item).length > 1;
      }
      return goal - currentNumber in numberArray;
    })
    .map(item => [item, goal - item]);
};
