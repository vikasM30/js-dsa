const arr = [54,23,1,66,2]

// here we divide array into sorted and unsorted array
// we assume 1st element as sorted and then compare it with other unsorted element by traversing, 
// and if greater value is founded, we swap them.

// O(n^2)
const insertion_sort_asc = (arr) => {

    for (let index = 1; index < arr.length; index++) {
        let numberToInsert = arr[index];
        let j = index - 1;
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j = j - 1;
        }
        arr[j+1] = numberToInsert
    }

}

const insertion_sort_desc = (arr) => {

    for (let index = 1; index < arr.length; index++) {
        let numberToInsert = arr[index];
        let j = index - 1;
        while(j >= 0 && arr[j] < numberToInsert) {
            arr[j+1] = arr[j]
            j = j - 1;
        }
        arr[j+1] = numberToInsert
    }

}

console.log('actual array', arr)
insertion_sort_asc(arr)
console.log('asc', arr)
insertion_sort_desc(arr)
console.log('desc', arr)
