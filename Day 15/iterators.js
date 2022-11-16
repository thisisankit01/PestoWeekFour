//for of loop

for (const x of [1,2,3]){
console.log(x);
};

//iteration in maps
const map = new Map([
  [65,'A'],
  [66,'B'],
  [67,'C'],
]);

for(const pair of map){
  const[key,value] = pair;
  console.log(key,value);
};

// 65 'A'
// 66 'B'
// 67 'C'

//iterating in strings
const emojis = '😀😃😄😁😆😅😂🤣hi'

for(const char of emojis){
  console.log(char);
};
//cannot print emojis with normal for loop


const iter = emojis[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// { value: '😀', done: false }
// { value: '😃', done: false }
// { value: '😄', done: false }
// { value: '😁', done: false }
// { value: '😆', done: false }
// { value: '😅', done: false }
// { value: '😂', done: false }
// { value: '🤣', done: false }
// { value: 'h', done: false }
// { value: 'i', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

//it returns false until every char is finished execution