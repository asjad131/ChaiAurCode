//singleton

const myUser = new Object()
const myUser2 = {}

const testUser ={}

testUser.id = "123abc"
testUser.name = "sammy"
testUser.isLoggedIn = false

const regUser = {
    id : "345hij",
    userFullname : { 
        firstName : "Asjad",
        lastName : "Mohammad"

    }
}
//console.log(myUser)
//console.log(myUser2)
//console.log(testUser)

//console.log(regUser)
//console.log(regUser.userFullname)
//console.log(regUser.userFullname.firstName)

const obj1 ={ 1: "a",
    2 : "b"
}

const obj2 ={ 3: "c",
    4 : "d"
}

const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
const obj5 = {...obj1, ...obj2}

console.log(obj3)
console.log(obj4)
console.log(obj5)

console.log(Object.keys(testUser))
console.log(Object.values(testUser))
console.log(Object.entries(testUser))