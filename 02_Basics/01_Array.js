// Arrays


const myArr = [0, 1, 2, 3, 4, 5,]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr)
console.log(myHeros)

// array methods

// myArr.push(6)
// myArr.push(8)
// // console.log(myArr)

// myArr.pop()

// myArr.unshift(10)
// myArr.shift(10)

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// ***********Slice & Splice**************


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);




