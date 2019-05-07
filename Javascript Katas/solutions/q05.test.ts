import { findLargestAndSmallest } from "./q05-solution";

describe("How do you find the largest and smallest number in an unsorted integer array?", () => {
    it("Should return top and tail in a sorted array", () => {
        expect(findLargestAndSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).smallest).toBe(1);
        expect(findLargestAndSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).largest).toBe(10);

        expect(findLargestAndSmallest([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]).smallest).toBe(3);
        expect(findLargestAndSmallest([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]).largest).toBe(13);
    });
    it("Should return top and tail in a sorted array with gaps", () => {
        expect(findLargestAndSmallest([1, 2, 3, 6, 7, 8, 9, 10]).smallest).toBe(1);
        expect(findLargestAndSmallest([1, 2, 3, 6, 7, 8, 9, 10]).largest).toBe(10);

        expect(findLargestAndSmallest([3, 6, 7, 8, 9]).smallest).toBe(3);
        expect(findLargestAndSmallest([3, 6, 7, 8, 9]).largest).toBe(9);
    });

    it("Should return top and tail in an unsorted array with gaps", () => {
        expect(findLargestAndSmallest([6, 3, 7, 8, 9, 10, 77]).smallest).toBe(3);
        expect(findLargestAndSmallest([6, 3, 7, 8, 9, 10, 77]).largest).toBe(77);

        expect(findLargestAndSmallest([6, 1, 25, 3, 7, 8, 9, 10, 7]).smallest).toBe(1);
        expect(findLargestAndSmallest([6, 1, 25, 3, 7, 8, 9, 10, 7]).largest).toBe(25);
    });
});
