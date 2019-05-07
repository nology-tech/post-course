// How do you find the largest and smallest number in an unsorted integer array?

export function findLargestAndSmallest(numberArray: number[]): {smallest: number, largest: number} {
    const sortedArray = numberArray.sort((a, b) => a - b);
    return {
      largest: sortedArray[sortedArray.length - 1],
      smallest: sortedArray[0],
    };
  }
