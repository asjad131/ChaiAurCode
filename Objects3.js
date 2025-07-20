//de-structuring

const course = {
    name :"WebDev",
    price: "9999",
    instructor:"Hitesh",
    mode : "Online"
}

console.log(course.instructor)

const{instructor} = course
const{price : cost} = course

console.log (instructor)
console.log (cost)