
// here as input size is reduced to half, so, O(log n)
const powerOfTwo = (term) => {
    if (term < 1) return false
    while(term > 1) {
        if(term % 2 !== 0) return false
        term = term / 2
    }
    return true
}

console.log('normal', powerOfTwo(33))

// O(1)
const powerOfTwoUsingBitwise = (term) => term < 1 ? false : (term & (term-1)) === 0

console.log('using bitwise', powerOfTwoUsingBitwise(33))
