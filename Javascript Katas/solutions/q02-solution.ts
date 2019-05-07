// How do you find the duplicate number on a given integer array?

export function findDuplicate(numberArray: number[]) {
    const matches: number[] = [];
    for (const num of numberArray) {
      if (matches.indexOf(num) === -1) { matches.push(num); } else { return num; }
    }
    return undefined;
  }
