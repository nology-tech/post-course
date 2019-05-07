import { findMultipleDuplicates } from "./q03-solution";

describe("How do you find duplicate numbers in an array if it contains multiple duplicates?", () => {

    it("Should return blank array if there are no duplicates", () => {
        expect(findMultipleDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toBe(0);
    });

    it("Should return duplicate when in sequence", () => {
        expect(findMultipleDuplicates([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])[0]).toBe(6);
        expect(findMultipleDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10])[0]).toBe(9);
    });

    it("Should return duplicate when out of sequence", () => {
        expect(findMultipleDuplicates([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10])[0]).toBe(10);
        expect(findMultipleDuplicates([1, 2, 9, 3, 4, 5, 6, 7, 8, 9, 10])[0]).toBe(9);
    });

    it("Should return multiple duplicates when in sequence", () => {
        expect(findMultipleDuplicates([1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])[0]).toBe(1);
        expect(findMultipleDuplicates([1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10])[1]).toBe(6);
    });

    it("Should return multiple duplicates when out of sequence", () => {
        expect(findMultipleDuplicates([1, 10, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])[0]).toBe(5);
        expect(findMultipleDuplicates([1, 10, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10])[1]).toBe(10);
    });
});
