//  immediately Invoked Function Expressions (IIFE)

(
function one(){
    //Named IIFE
    console.log('DB connected')
})(); // if we are witing two iffe in the first one we have to write semicolan
    //    otherwise it will not execute => Errors

( (name) => {
  console.log(`DB connected two ${name}`);
} )('Ansh') 
  