console.log("-----------Basic Array Methods----------");
const arr = [1, 3, "12", true];
console.log("original array", arr);
arr.push(2);
console.log("push: add at the end", arr);
arr.unshift("vikas");
console.log("unshift: add at the start", arr);
arr.pop();
console.log("pop: delete last element", arr);
arr.shift();
console.log("shift: delete first element", arr);

console.log("-----------For OF----------");
for (const element of arr) {
  console.log("forOf: ", element);
}

console.log("-----------For In----------");
// gives index
for (const key in arr) {
  if (Object.prototype.hasOwnProperty.call(arr, key)) {
    console.log("forIn: ", "index: ", key, "value -->>", arr[key]);
  }
}

// map, filter, reduce, concat, slice, splice, forEach
console.log("-----------Array Functions----------");
console.log(`array.splice('addAtIndex', 'noOfElementsToReplace', 'value')`)
console.log("-----------Array From----------");

// Array.from
console.log('Array.from("foo"): ', Array.from("foo"));
console.log(
  "Array.from([1, 2, 3], (x) => x + x): ",
  Array.from([1, 2, 3], (x) => x + x)
);
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
console.log(
  "Array.from({ length: 5 }, (v, i) => i): ",
  Array.from({ length: 5 }, (v, i) => i)
);

// Array from Set
const set = new Set(["foo", "bar", "baz", "foo"]);
console.log("Array from Set", Array.from(set));

// Array from Map
console.log(`const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);`);
console.log(`const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
])`);
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
console.log("Array.from(map): ", Array.from(map));

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
console.log("Array.from(mapper.values()): ", Array.from(mapper.values()));

console.log("Array.from(mapper.keys()): ", Array.from(mapper.keys()));

console.log("-----------Sequence Generator----------");

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
console.log(`const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);`)
console.log("range(0, 4, 1): ", range(0, 4, 1));
console.log("range(0, 4, 1): ", range(0, 4, 2));
console.log(
  `range("A".charCodeAt(0), "Z".charCodeAt(0), 1): `,
  range("A".charCodeAt(0), "Z".charCodeAt(0), 1)
);
console.log(
  `  range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
  ): `,
  range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
  )
);

function NotArray(len) {
    console.log("NotArray called with length", len);
}
  console.log(`function NotArray(len) {
    console.log("NotArray called with length", len);
}`)
  // Iterable
  console.log(`Array.from.call(NotArray, new Set(["foo", "bar", "baz"])): `, Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
  console.log(`Array.from.call({}, new Set(["foo", "bar", "baz"])): `, Array.from.call({}, new Set(["foo", "bar", "baz"])));
  // NotArray called with length undefined
  
  // Array-like
  console.log(`Array.from.call(NotArray, { length: 1, 0: "foo" }): `, Array.from.call(NotArray, { length: 1, 0: "foo" }));
  console.log(`Array.from.call({}, { length: 1, 0: "foo" }): `, Array.from.call({}, { length: 1, 0: "foo" }));