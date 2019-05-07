// 16: How do you check if a string contains only digits?

import { onlyDigits } from "./q16-solution";

test("How do you check if a string contains only digits?", () => {
    expect(onlyDigits("abc")).toBeFalsy();
    expect(onlyDigits("abc1")).toBeFalsy();
    expect(onlyDigits("1234")).toBeTruthy();
});
