import { missingNumberInSequence } from "./q01-solution";

describe("How do you find the missing numbers in a given integer array?", () => {

    it("should return blank array when no missing numbers", () => {
        expect(missingNumberInSequence([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toBe(0);
    });

    it("Should find a missing number when in sequence", () => {
        expect(missingNumberInSequence([1, 2, 4, 5, 6, 7, 8, 9, 10])[0]).toBe(3);
        expect(missingNumberInSequence([1, 2, 3, 4, 5, 6, 7, 9, 10])[0]).toBe(8);
        expect(missingNumberInSequence([2, 4, 5, 6, 7, 8, 9, 10])[0]).toBe(3);
    });

    it("Should find a missing number when out of sequence", () => {
        expect(missingNumberInSequence([1, 6, 8, 2, 4, 5, 7, 9, 10])[0]).toBe(3);
        expect(missingNumberInSequence([6, 8, 2, 4, 5, 7, 9, 10])[0]).toBe(3);
        expect(missingNumberInSequence([6, 8, 4, 7, 9, 10])[0]).toBe(5);
        expect(missingNumberInSequence([256, 255, 253])[0]).toBe(254);
    });

    it("Should find multiple numbers", () => {
        expect(missingNumberInSequence([1, 2, 4, 6])[0]).toBe(3);
        expect(missingNumberInSequence([1, 2, 4, 6])[1]).toBe(5);
        expect(missingNumberInSequence([1, 2, 6])[0]).toBe(3);
        expect(missingNumberInSequence([1, 2, 6])[1]).toBe(4);
        expect(missingNumberInSequence([1, 2, 6])[2]).toBe(5);
    });

    it("Should find multiple negative numbers", () => {
        expect(missingNumberInSequence([-1, -2, -4])[0]).toBe(-3);
    });

});
