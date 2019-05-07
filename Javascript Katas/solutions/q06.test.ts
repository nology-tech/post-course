import { findPairsWhichSum } from "./q06-solution";

describe("How do you find all pairs of an integer array whose sum is equal to a given number?", () => {
    it("Should find first pair of numbers", () => {
        const pairs = findPairsWhichSum([1, 2, 2, 3, 3, 5, 6, 7, 7], 4);
        expect(pairs.length).toBe(2);

        expect(pairs[0]).toContain(2);
        expect(pairs[0]).toContain(2);

        expect(pairs[1]).toContain(1);
        expect(pairs[1]).toContain(3);
    });
    it("Should cope with matches half of goal", () => {
        const pairs = findPairsWhichSum([5, 2, 2, 4, 8, 5, 6, 7, 7], 12);
        expect(pairs.length).toBe(2);
        expect(pairs[1]).toContain(5);
        expect(pairs[1]).toContain(7);

        expect(pairs[0]).toContain(4);
        expect(pairs[0]).toContain(8);
    });
    it("Should work with out of order numbers", () => {
        const pairs = findPairsWhichSum([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12);
        expect(pairs.length).toBe(3);
        expect(pairs[1]).toContain(6);

        expect(pairs[2]).toContain(5);
        expect(pairs[2]).toContain(7);

        expect(pairs[0]).toContain(4);
        expect(pairs[0]).toContain(8);
    });
});
