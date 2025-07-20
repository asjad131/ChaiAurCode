//functions

function sayMyName(){
    console.log("A")
    console.log("S")
    console.log("J")
    console.log("A")
    console.log("D")
}

sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2)
}

function addTwoNumbersRet(number1, number2){

    return number1+number2
}
const result = addTwoNumbers(3,6)
console.log("Result: ", + result)

const result1 = addTwoNumbersRet(3,8)
console.log("Result: ", + result1)


function loggedInUserMessage(username){
    if(!username){
        console.log("Please enter a user Name!")
        return
    }
    return `${username} just logged in.`

}

function loggedInUserMessageP(username = "Sam"){
    if(!username){
        console.log("Please enter a user Name!")
        return
    }
    return `${username} just logged in.`

}

console.log(loggedInUserMessage("Asjad"))
console.log(loggedInUserMessage())

console.log(loggedInUserMessageP("Asjad"))
console.log(loggedInUserMessageP())

//multiple parameters
function calculatePricing(num){
 return num
}

function calculatePricingAll(...nums){
 return nums
}
console.log(calculatePricing(100))
console.log(calculatePricingAll(100, 250, 560))

//array and object passed to function
const user = {
    course : "Webdev",
    price : 1000
}

function handleObject(anyObject){
    console.log(`Course Name is ${anyObject.course} and Price is ${anyObject.price}`)
}

handleObject(user)
handleObject({course:"Java", price: 2500})

const myArray = [100,300,500,700]

function handleArray(anyArray){
    return anyArray[3]
}

console.log(handleArray(myArray))
console.log(handleArray([100,200,300,400]))

//arrow function
const arrowfunc = (a,b) => {return a+b}
const arrowfunc1 = (a,b) => (a+b)

console.log(arrowfunc(4,9))
console.log(arrowfunc(7,9))