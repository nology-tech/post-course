// How do you find the duplicate number on a given integer array?

export const findDuplicate = (numberArray: number[]) => {
  const notDuplicateInteger: number[] = [];
  let duplicateNum: number;
  numberArray.forEach(num => {
    if (!notDuplicateInteger.includes(num)) {
      notDuplicateInteger.push(num);
    } else {
      duplicateNum = num;
    }
  });
  return duplicateNum;
};
