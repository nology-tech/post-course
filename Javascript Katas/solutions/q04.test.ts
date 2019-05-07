import { removeDuplicates } from "./q04-solution";

describe("How are duplicates removed from a given array in ES6?", () => {
    it("Should remove duplicates in a sorted array", () => {
        expect(removeDuplicates([1, 2, 2, 3])[0]).toBe(1);
        expect(removeDuplicates([1, 2, 2, 3])[1]).toBe(2);
        expect(removeDuplicates([1, 2, 2, 3])[2]).toBe(3);

        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[0]).toBe(1);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[1]).toBe(2);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[2]).toBe(3);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[3]).toBe(5);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[4]).toBe(6);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7])[5]).toBe(7);
        expect(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7]).length).toBe(6);
    });

    it("Should remove duplicates in an unsorted array", () => {
        expect(removeDuplicates([3, 2, 2, 1])[0]).toBe(3);
        expect(removeDuplicates([3, 2, 2, 1])[1]).toBe(2);
        expect(removeDuplicates([3, 2, 2, 1])[2]).toBe(1);

        const result = removeDuplicates([8, 2, 2, 5, 3, 3, 6, 7, 7]);
        expect(result[0]).toBe(8);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(5);
        expect(result[3]).toBe(3);
        expect(result[4]).toBe(6);
        expect(result[5]).toBe(7);
        expect(result.length).toBe(6);
    });
});
