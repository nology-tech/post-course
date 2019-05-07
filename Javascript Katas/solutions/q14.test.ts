import { swapWithoutThirdVariable } from "./q14-solution";

describe("How do you swap two numbers without using a third variable?", () => {

    it("should swap positive numbers successfully", () => {
        expect(swapWithoutThirdVariable([5, 10])[0]).toBe(10);
        expect(swapWithoutThirdVariable([5, 10])[1]).toBe(5);

        expect(swapWithoutThirdVariable([10, 5])[0]).toBe(5);
        expect(swapWithoutThirdVariable([10, 5])[1]).toBe(10);

        expect(swapWithoutThirdVariable([15, 110])[0]).toBe(110);
        expect(swapWithoutThirdVariable([15, 110])[1]).toBe(15);
    });

    it("should swap negative numbers successfully", () => {
        expect(swapWithoutThirdVariable([-5, -10])[0]).toBe(-10);
        expect(swapWithoutThirdVariable([-5, -10])[1]).toBe(-5);
    });

});
