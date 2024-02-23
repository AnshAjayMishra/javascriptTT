//  Singleton

//  object literals

// array me key define nhi kr skte sirf object ko acess kr skte hai
// bt isme dono ko kar skte hai

const mysym = Symbol("key1")

const JsUser = {
    name: "Ansh",
   "full name": "Ansh Ajay Mishra",
   [mysym]: "mykey1",
    age: 20,
    location: "jaipur",
    email: "anshajay@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Saturday"]
}
//  console.log(JsUser.email);
//  console.log(JsUser.name);
//  console.log(JsUser["full name"]);
//  console.log(JsUser[mysym]);

JsUser.email = "anshajay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anshajay@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this["full name"]}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
