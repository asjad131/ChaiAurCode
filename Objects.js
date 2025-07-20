//Singleton
//object.create

//object literals

const JSUser ={
    name : "Asjad",
    "full Name" : "Asjad Pygamy Mohammad",
    email : "asjad131@gmail.com",
    age: 37,
    Company: "HCL Tech",
    Designation: "Lead Consultant",
    Location : "Hyderabad"
}

//console.log(JSUser.Company)
//console.log(JSUser.email)
//console.log(JSUser["email"])
//console.log(JSUser["full Name"])

JSUser.email = 'asjad.mohammad@gmail.com'

//onsole.log(JSUser)

JSUser.greeting = function(){
    console.log ("Hello JS USER: " + JSUser["full Name"])
}

JSUser.greetingTwo = function(){
    console.log (`Hello JS USER, ${this["full Name"]}`)
}

console.log(JSUser.greeting)
console.log(JSUser.greeting())
console.log(JSUser.greetingTwo())