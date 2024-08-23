class Stack extends Array {
    constructor(...elems){
        super(...elems)
    }

    pop() {
        if (this.length === 0) throw new Error("Nothing to pop!")
        super.pop()
    }

    peek() {
        if (this.length === 0) throw new Error("Stack is empty!")
        return this[this.length - 1]
    }

    size() {
        return this.length
    }
}

const str1 = "[{{(())}}]"
const str2 = "[{{(())}}]]"
const str3 = "[{{(()}]"
const str4 = "}{{}}{()((()"
const str5 = "[{((({{"

const check = (str) => {
    console.log("-----------------------------------------------------")
    const arr = str.split('')
    const stack = new Stack()
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        const currentEle = arr[i];
        if (['[','{','('].includes(currentEle)) {
            stack.push(currentEle)
        } else {
            if (stack.size() === 0) {
                if (flag) {
                    console.log('All pairs ending and opening matches, but some extra unmatched brackets found later, hence invalid.')
                } else {
                    console.log(`Expression starts with closing bracket ${currentEle}, hence invalid.`)
                }
                return false
            }
            const lastEle = stack.peek();
            stack.pop()
            if( (lastEle === '[' && currentEle == ']') || (lastEle === '{' && currentEle == '}') || (lastEle === '(' && currentEle == ')') ) {
            // console.log(`pari found ${lastEle} and ${currentEle}`)
            flag = true
            } else {
                console.log(`No immediate closing pair found for ${lastEle}, hence invalid.`)
                return false;

            }
        }
    }

    if (stack.size() !== 0) {
        console.log(`No closing brackets was found in string`)
        return false
    }

    return true;
}

console.log(`original pattern ${str1}`, check(str1))
console.log(`original pattern ${str2}`, check(str2))
console.log(`original pattern ${str3}`, check(str3))
console.log(`original pattern ${str4}`, check(str4))
console.log(`original pattern ${str5}`, check(str5))