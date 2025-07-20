const marv_heros =["Thor","Ironman", "Spiderman"]
const dc_heros =["Superman", "Flash", "Batman"]

//marv_heros.push(dc_heros)

//console.log(marv_heros)
//console.log(marv_heros[3])
//console.log(marv_heros[3][1])

const allheros = marv_heros.concat(dc_heros)
console.log(allheros)

const all_heros = [...marv_heros, ...dc_heros]
console.log(all_heros)

const num_array =[1,3, [5,6,7], [10,11], 87,43]
const flat_num_array = num_array.flat(Infinity)

console.log(flat_num_array)

console.log(Array.isArray("ChaiAurCode"))
console.log(Array.from("ChaiAurCode"))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
