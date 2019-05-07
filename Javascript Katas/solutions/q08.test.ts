import { findDuplicates } from "./q08-solution";
// How do you print duplicate characters from a string?

describe("How do you print duplicate characters from a string?", () => {
    it("abbc", () => {
        expect(findDuplicates("abbc")[0]).toBe("b");
    });
    it("afewreociwddwjej", () => {
        const result = findDuplicates("abcdefghibjkldddkkk");
        expect(result.length).toBe(3);
        expect(result[0]).toBe("b");
        expect(result[1]).toBe("d");
        expect(result[2]).toBe("k");
    });
});
