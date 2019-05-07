// 14: How do you swap two numbers without using a third variable?
export let swapWithoutThirdVariable = (varArray) => {
    // assuming a = 5 and b = 10;

    let a = varArray[0];
    let b = varArray[1];

    a = a + b; // a now becomes 15
    b = a - b; // b becomes 10
    a = a - b; // a becomes 5

    return [a, b];
};
