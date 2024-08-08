
/*
For
n = 1, step=1;
n = 2, step=3;
n = 3, step=7;
So,
 O((2^n) - 1),

when value of n increases.. 
O(2^n)
*/
const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
    if(n === 1) {
        console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
        return
    }
    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

console.log(towerOfHanoi(2, 'A', 'B', 'C'))