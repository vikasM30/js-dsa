// Dynamic Programming = Recursion + Memoization

// normal function, here if there is big computation of same number, it will take more time
const addTo10 = (n) => {
    console.log('time taking call')
    return n + 10;
}

// here we are using the cache variable as global
let cache = {}

// memoization: here once computed solution is kept in cache and if again same number is passed, it picks from the cache
function memoizedAddTo10(n) {
    if (n in cache) {
        return cache[n]
    } else {
        console.log('time taking call')
        cache[n] = n + 80;
        return cache[n]
    }
}


console.log('1', memoizedAddTo10(5))
console.log('2', memoizedAddTo10(5))
console.log('3', memoizedAddTo10(6))
console.log('4', memoizedAddTo10(5))


// now the above process pollutes the global scoped cache vaiable, solution is that to use Closure.

function memoizedAddTo10Clouser() {
    let cacheClouser = {}
    return (n) => {
        if (n in cacheClouser) {
            return cacheClouser[n]
        } else {
            console.log('time taking call in clouser')
            cacheClouser[n] = n + 80;
            return cacheClouser[n]
        }
    }
}

const memoized = memoizedAddTo10Clouser()

console.log('Clouser 1', memoized(5))
console.log('Clouser 2', memoized(5))
console.log('Clouser 3', memoized(6))
console.log('Clouser 4', memoized(5))