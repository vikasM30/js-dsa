const arr = [3,4,53,2,78,22,1]

// O(n)
const search = (term) => {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == term) return {value: term, isPresent: true, index};
    }
    return {value: term, isPresent: false, index: -1}
}

console.log(search(53))
console.log(search(5))