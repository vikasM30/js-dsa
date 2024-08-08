
// O(2^n)
let count = 0
function fibonacci_normal(term) {
    count++;
    if (term < 2) {
        return term;
    }
    return fibonacci_normal(term - 1) + fibonacci_normal(term - 2);
}

console.log(fibonacci_normal(30), count)


// by dynamic programming
// O(n)
let count_dp = 0
function fibonacci_dp() {
    let cache = {}
    return fib = (n) => {
        count_dp++;
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            }
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n]
        }
    }
}

const memoized = fibonacci_dp()

console.log(memoized(30), count_dp)
