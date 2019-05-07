// 07: How do you reverse an array in place in Javascript?

import { reverseWordsInSentence } from "./q07-solution";

describe("How do you reverse the words in a sentence?", () => {
    it("Reverses basic sentence", () => {
        expect(reverseWordsInSentence("The dog is big")).toBe("big is dog The");
        expect(reverseWordsInSentence("I am a dog")).toBe("dog a am I");
    });
});
