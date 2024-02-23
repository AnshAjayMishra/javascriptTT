// console.log("hello" + " world");

const name = "Ansh"
const repoCount = 10

// console.log(name + repoCount );

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);
// (`${}`) are parameter passing method
const gameName = new String('AnshAjay-Mishra');
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Ansh        "
console.log(newStringOne);
console.log(newStringOne.trim());