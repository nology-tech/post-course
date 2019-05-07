import { findDuplicate } from "./q02-solution";

describe("How do you find the duplicate number on a given integer array?", () => {

    it("Should return undefined if there are no duplicates", () => {
        expect(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeUndefined();
    });

    it("Should return duplicate when in sequence", () => {
        expect(findDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])).toBe(6);
        expect(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10])).toBe(9);
    });

    it("Should return duplicate when out of sequence", () => {
        expect(findDuplicate([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
        expect(findDuplicate([1, 2, 9, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(9);
    });
});
