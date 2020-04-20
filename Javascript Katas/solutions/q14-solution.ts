// 14: How do you swap two numbers without using a third variable?
export const swapWithoutThirdVariable = (varArray: number[]): number[] => {
    let a = varArray[0];
    let b = varArray[1];
  
    return ([a, b] = [b, a]);
  };
  