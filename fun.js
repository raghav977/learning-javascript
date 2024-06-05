// function sayName(){
//     console.log("hi I am ragha dahal")
// }


// function addNumber(number1, number2){
//     return number1 + number2

// }
// console.log(addNumber(1,2))

function loginUser(username){
    if(username===undefined){
        console.log("Please enter the username")
        return
    }
    return `${username} has just logged in`
}
console.log(loginUser("Raghav"))