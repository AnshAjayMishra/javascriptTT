// # Primitive 
  // 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//   const Score = 100
//   const ScoreValue = 100.5

//   const isLoggedIn = false
//   const OutsideTemp = null
//   let UserEmail = undefined

//   const id = Symbol('123')
//   const anotherId = Symbol('123')

//   console.log(id === anotherId)

//   const bigNumber = 53264656232626326n


  // # Non-Primitive / Refrence type

  // Arrays, Objects, Functions


// const heros = ["BADMAS", "SHAKTIMAN", "NAAGRAJ", "IRONMAN", "CAPTAIN-AM"]
// console.log(heros); //array

// let myObj= {
//     name: "Ansh",
//     Age: 20,

// } // object
// console.log(myObj);

// const myFun = function(){
//     console.log("HEY WORLD");
// }// function
 

// console.log(typeof myFun); // pta kar skte hai konsa data type hai

// *******************************************************************************
    //   Stack memory And Heap Memory
// Stack (primitive) , Heap (Non-Primitive)

let myYoutubeName = "AnshAjayMishra"

let anothername = myYoutubeName
anothername = "IAMNASH"


console.log(myYoutubeName);
console.log(anothername);

let user1 = {
    name: "AnshAjayMishra",
    email: "Anshajaymishra@gmail.com",
    upi: "anshajaymishra@sbi"
}

let user2 = user1
user2.email = "Ansh@gmail.com"
console.log(user1);
console.log(user2);