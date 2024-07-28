// Note: Array should be sorted

const arr = [3, 6, 9, 23, 34, 56, 77, 88]

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