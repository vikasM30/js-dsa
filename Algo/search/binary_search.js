// Note: Array should be sorted
// we take out the mid value of the array, and check if it is greater than or equal to or less than the item to be search.

const arr = [3, 6, 9, 23, 34, 56, 77, 88]

// here with every iteration we reduce the input size to half, so Time Complexity O(logn)
const search = (arr, term) => {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (term == arr[middleIndex]) return {value: term, isPresent: true, index: middleIndex}
        if (term < arr[middleIndex]) { rightIndex = middleIndex - 1 } else { leftIndex = middleIndex + 1 }
    }
    return {value: term, isPresent: true, index: -1}
}

console.log(search(arr, 56))
console.log(search(arr, 5))


// Time Complexity O(logn)
const search_recursion = (arr, term, leftIndex, rightIndex) => {
    if(leftIndex > rightIndex) {return {value: term, isPresent: true, index: -1}}
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (term == arr[middleIndex]) {return {value: term, isPresent: true, index: middleIndex}}
    if (term < arr[middleIndex]) { return search_recursion(arr, term, leftIndex, middleIndex - 1) } else { return search_recursion(arr, term, middleIndex + 1, rightIndex) }
}

console.log(search_recursion(arr, 56, 0, arr.length -1))
console.log(search_recursion(arr, 5, 0, arr.length -1))