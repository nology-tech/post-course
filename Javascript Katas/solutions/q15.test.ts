// 15: How do you find all permutations of a string?

import { allPermutations } from "./q15-solution";

describe("How do you find all permutations of a string?", () => {

    it("should cope with 2 characters", () => {
        expect(allPermutations("ab")).toContain("ab");
        expect(allPermutations("ab")).toContain("ba");
        expect(allPermutations("ab").length).toBe(2);
    });

    it("should cope with 3 characters", () => {
        expect(allPermutations("abc")).toContain("abc");
        expect(allPermutations("abc")).toContain("acb");
        expect(allPermutations("abc")).toContain("bac");
        expect(allPermutations("abc")).toContain("bca");
        expect(allPermutations("abc")).toContain("cab");
        expect(allPermutations("abc")).toContain("cba");
        expect(allPermutations("abc").length).toBe(6);
    });

});
