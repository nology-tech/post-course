// How do you remove duplicate numbers from an array?

export const removeDuplicates = (numberArray: number[]) => {
  return Array.from(new Set(numberArray));
};

// export const removeDuplicates = (numberArray: number[]) => {
//   const notDuplicatedNumbers = [];
//   numberArray.forEach(num => {
//     if (notDuplicatedNumbers.indexOf(num) === -1) {
//       notDuplicatedNumbers.push(num);
//     } else {
//       null;
//     }
//   });
//   return notDuplicatedNumbers;
// };
