

function MyName(){
    console.log("A");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("A");
    console.log("j");
    console.log("a");
    console.log("y");
    }

    // MyName()

    function addTwoNumbers(number1, number2){  // parameters
        // console.log(number1 + number2);
        let result = number1 + number2
        return result 

    }
   const result = addTwoNumbers(15, 20) // Arguements

    // console.log("Result: ", result);
    function LoginUserMessage(username = "Sam"){
        if(username == undefined) {
            console.log("please enter a username")
            return

        }
         return `${username}just logged in`
    }
//    console.log( LoginUserMessage("Ansh"))
// console.log(LoginUserMessage("Ansh "))

function CalculateCartPrice(val1, val2, ...num1){ //... are called rest operator
     return num1
}

// console.log(CalculateCartPrice(200, 300, 400));

const user = {
    username: "Ansh",
    price: 999

}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

handleObject(user)

const myArr = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500 ]));