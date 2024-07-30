const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); 
// console.log(marvel_heros[3]);

// const allHeroes = marvel_heros.concat(dc_heros)
// console.log(allHeroes);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhay"))
console.log(Array.from("Abhay"))
console.log(Array.from({name:"Abhay"})) // this function can't convert it into array because we have to declare that which thing we want to make array like key or value 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));



