// How do you find duplicate numbers in an array if it contains multiple duplicates?

export const findMultipleDuplicates = (numberArray: number[]) => {
  const notDuplicateInteger: number[] = [];
  const duplicateNum: number[] = [];

  numberArray.forEach(num => {
    if (!notDuplicateInteger.includes(num)) {
      notDuplicateInteger.push(num);
    } else {
      duplicateNum.push(num);
    }
  });
  return duplicateNum;
};
