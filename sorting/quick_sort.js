const arr = [54, 23, 1, 66, 2]

// here we choose a pivot element, and then traverse through array and divide the two left and right array,
// greater than and less than pivot element, we continue this till the time its sorted. 
// At last we concat the array into one.

// worst case:- O(n^2), happens when array is already sorted
// average case:- O(nlogn)

//case 1
const quick_sort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let index = 0; index < arr.length - 1; index++) { // last element is already taken
        if (arr[index] > pivot) {
            right.push(arr[index])
        } else {
            left.push(arr[index])
        }
    }
    return [...quick_sort(left), pivot, ...quick_sort(right)]
}

// console.log('actual array', arr)
// console.log('sorted: ', quick_sort(arr))


// case 2 (removing the extra space)
const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivot = partition(arr, left, right)
        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, right)
    }
    return arr
}

const partition = (arr, left, right) => {
    const pivot = arr[right]
    let i = left
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, right)
    return i
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

console.log('actual array', arr)
quickSort(arr)
console.log('sorted: ', arr)
