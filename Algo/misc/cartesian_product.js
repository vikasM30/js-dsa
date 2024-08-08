
// O(mn)
const cartesian = (arr1, arr2) => {
    const res = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            res.push([arr1[i], arr2[j]])
        }
    }
    return res
}

console.log(cartesian([1,2], [3,4,5]))