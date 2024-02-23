const user = {
    username: "Ansh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


// user.welcomeMessage()
// user.username = "Ansh"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     let username = "Ansh"
//     console.log(this.username);
// }

// one()

const one = () => {
    let username = "Ansh"
    console.log(this);
}


// one()

// const addTwo = (num1, num2,) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2,) => num1 + num2 //implicit return

const addTwo = (num1, num2,) => (num1 + num2)

console.log(addTwo(3, 4))