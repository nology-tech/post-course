// How do you remove duplicate numbers from an array?

export function removeDuplicates(numberArray: number[]) {
    return [... new Set(numberArray)];
  }
