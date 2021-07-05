// How do you find the largest and smallest number in an unsorted integer array?

export const findLargestAndSmallest = (numberArray: number[]) => {
  const sortedArray = numberArray.sort((a, b) => a - b);
  return {
    largest: sortedArray[sortedArray.length - 1],
    smallest: sortedArray[0]
  };
}
