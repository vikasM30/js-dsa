// [0,1]
// [0,1,1]
// [0,1,1,2,3,5,8]


const n = 30;
// Printing n fibonacci sequence 

// case 1
// Time Complexity: O(n)
const finonacci_1 = (term) => {
    let res = [0, 1];
    for (let i = 2; i < term; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res;
}
// console.log('case 1', finonacci_1(n))

// case 2
// Time Complexity: case 2 O(2^n) + O(n)
function fibonacci_2(term) {
    if (term <= 1) {
        return term;
    }
    return fibonacci_2(term - 1) + fibonacci_2(term - 2);
}

for (let i = 0; i < n; i++) {
    // console.log('case 2', fibonacci_2(i));
};


// Sum
// Time Complexity: case 2 O(2^n)

/*
Space Complexity: 

What's the highest value for "stack" that is printed out. You'll see that it's "7".
/ry other values for "term" and you'll see that the "stack" value printed never rises above the original "term" value passed in.

Hence O(n)
*/
// let count = 0
const finonacci_sum = (term, stack) => {
    // console.log({term, stack})
    // count++;
    if (term == 0 || term == 1) { return 0 }
    return finonacci_sum(term - 1, stack +1) + finonacci_sum(term - 2, stack+1) + 1;
}

// console.log('sum: ', finonacci_sum(n, 1))
// console.log(count)
