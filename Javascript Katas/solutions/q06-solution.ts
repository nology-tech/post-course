// 06: How do you find all pairs of an integer array whose sum is equal to a given number?

// export function findPairsWhichSum(numberArray: number[], goal: number) {

// }

//it returns an array
//is checking for the length of the array 3 itmes length equal to 2
//accessing the array is expecting to be [2,1,3]

// it("Should find first pair of numbers", () => {
//   const pairs = findPairsWhichSum([1, 2, 2, 3, 3, 5, 6, 7, 7], 4);
//   expect(pairs.length).toBe(2);

//   expect(pairs[0]).toContain(2);
//   expect(pairs[0]).toContain(2);

//   expect(pairs[1]).toContain(1);
//   expect(pairs[1]).toContain(3);
// });

// 06: How do you find all pairs of an integer array whose sum is equal to a given number?

export function findPairsWhichSum(
  numberArray: number[],
  goal: number
): number[][] {
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
}
