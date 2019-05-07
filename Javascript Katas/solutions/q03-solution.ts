// How do you find duplicate numbers in an array if it contains multiple duplicates?

export function findMultipleDuplicates(numberArray: number[]) {
    const matches: number[] = [];
    const duplicates: number[] = [];
    for (const num of numberArray) {
      if (matches.indexOf(num) === -1) { matches.push(num); } else { duplicates.push(num); }
    }
    return duplicates;
  }
