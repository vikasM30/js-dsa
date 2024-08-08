// Greatest Common Divisor

/**
 * The Euclidean algorithm is a way to find the greatest common divisor of two positive integers, a and b.
 * For a=24 and b=18. Divide 24 by 18, and get the result 1 with remainder 6, so 24=18*1+6
 */

// you can divide 0 by anything and the remainder will always be 0.
const GCD_1 = (a,b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
}

const GCD_2 = (a,b) => {
    if(!b) return a;
    console.log([a, Math.floor(a/b)])
    return GCD_2(b, a%b);
}

console.log(GCD_1(210,45))
console.log(GCD_2(1914,899))