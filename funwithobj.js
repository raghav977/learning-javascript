function calculateCartPrice(...num1){
    var sum=0
    for (var i=0;i<num1.length;i++){
        var sum = sum + num1[i]
    }
    console.log(sum)
    return num1

}
console.log(calculateCartPrice(10,20,30))

const user={
    name:"raghav",
    price:1200
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject['name']} and price is ${anyobject['price']}`)
}

handleObject(user)
handleObject({
    name:"ram",
    price:12300
}
)
const myArray = [200,400,300]
function returnSecondValue(anyarray){
    console.log(anyarray[1])
}
returnSecondValue(myArray)
