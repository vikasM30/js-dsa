const n = 5;

//case 1  O(n)
const factorial_1 = (term) => {
    if(term == 0) return 1
    return term * factorial_1(term-1)
}
console.log(factorial_1(n))


//case 2 O(n)
const factorial_2 = (term) => {
    let res = 1
    for (let index = 2; index <= term; index++) {
        res = res * index;
    }
    return res
}
console.log(factorial_2(n))

