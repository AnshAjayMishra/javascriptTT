// let a = 10
// const b = 20
// var c = 30 

// var c = 100

let a = 300

if (true){

    let a = 10
    const b = 20
 console.log("Inner: ", a);
    
}



// console.log(a);


// *******nested scope******

function one() {
    const username = "AnshAjayMishra"
    function two(){

        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

// if (true){
//     const username = "Ansh"
//     if (username === "Ansh"){
//         const website = " Youtube"
//         console.log(username + website);
//     }
//     // console.log(wesbite);
// }

// console.log(username);

//*****************INTRESTING */

function addone(value){
    return num + 1
}
addone(5)


const addTwo = function(num){
    return num + 2
}

addTwo(5)