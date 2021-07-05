// 01 How do you find the missing numbers in a given integer array?
// 01 How do you find the missing numbers in a given integer array?
export const missingNumberInSequence = (numberArray: number[]) => {
  const missingNumber: number[] = [];
  const sortedNumbers = numberArray.sort((a, b) => a - b);
  const smallestNumber = numberArray[0];
  const biggestNumber = numberArray[numberArray.length - 1];
  for (let number = smallestNumber; number < biggestNumber; number++) {
    if (sortedNumbers.indexOf(number) === -1) {
      missingNumber.push(number);
    }
  }
  return missingNumber;
};
