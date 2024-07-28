const arr = [3, 4, 53, 2, 78, 22, 1]

// poor solution sort
// we have to swap adjacent elements while traversing the array.... and repeat this till its completely sorted

// O(n^2)
let count = 0
let count1 = 0
const bubble_sort = (arr) => {
    let swapped;
    do {
        swapped = false;
        count++
        for (let index = 0; index < arr.length - 1; index++) {
            count1++
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index];
                arr[index] = arr[index + 1]
                arr[index + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

bubble_sort(arr)
console.log(arr)
console.log('no of times do while loop called', count)
console.log('no of times for loop called fully', count1/arr.length)