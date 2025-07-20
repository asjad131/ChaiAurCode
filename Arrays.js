//array
let myArr = [1,2,3,4,5]
const myHeros = ["Super Man", "Bond", "Iron Man", "Spider Man"]
let testArr = new Array(123, 698, 765)

//Accessing the array/elements
//console.log(myArr[2])
//console.log(myHeros[2])
//console.log(testArr[2])

//Array Methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(0)
//myArr.shift()

//console.log(myArr.includes(10))
//console.log(myArr.indexOf(10))
//console.log(myArr.indexOf(4))

//const newArr = myArr.join()

//console.log(newArr)
//console.log(typeof newArr)

const newArr = myArr.slice(1,3)

console.log( "A " , myArr)
console.log(newArr)
console.log( "B " , myArr)

const newArr1 = myArr.splice(1,3)

console.log(newArr1)
console.log( "C " , myArr)