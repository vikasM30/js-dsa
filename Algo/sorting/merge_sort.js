// here we divide the array into each individual array and then sort them.
// it is the best sorting algo.

// O(logn) => as we divide the array into half and O(n) because while loop... so, O(nlogn)
const mergesort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
}

const merge = (leftArr, rightArr) => {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
}

const arr = [54, 23, 1, 66, 2]
console.log(mergesort(arr))
