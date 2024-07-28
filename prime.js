// 2,3,5,7,11

// O(n^2)
const listPrime = (term) => {
    let count = 0;
    for (let i = 2; i <= term; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) count++
        }
        if (count == 2) console.log(i)
        count = 0;
    }
}

// listPrime(20)

// O(n)
// case 1
const isPrime_1 = (term) => {
    if (term < 2) return false
    for (let index = 2; index < term; index++) {
        if(term % index == 0) return false        
    }
    return true
}

console.log(isPrime_1(19))

// O(sqrt(n))
// case 2
const isPrime_2 = (term) => {
    if (term < 2) return false
    for (let index = 2; index <= Math.sqrt(term); index++) {
        if(term % index == 0) return false        
    }
    return true
}

console.log(isPrime_2(19))