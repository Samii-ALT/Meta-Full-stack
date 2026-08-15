// spread operator expands things..

a1 = [0, 20, 40]
a2 = [10, 30, 50]
const combined = [...a1, ...a2]
console.log(combined);   // [ 0, 20, 40, 10, 30, 50 ]



// Adding items in array without push.. E-g:

var fruits = ["Banana", "Mango"]
let newFruits = [...fruits, "Kiwi"]
console.log(newFruits);   // [ 'Banana', 'Mango', 'Kiwi' ]




// Converting strings into array

const word = "Hello";
let letter = [...word]
console.log(letter)   // [ 'H', 'e', 'l', 'l', 'o' ]




// Joining objects.

var person = {
    name: "Samiullah",
    age: 18
};
var details = {
    city: "Faisalabad",
    student: true
};
const tog = {
    ...person,
    ...details
};
console.log(tog);  // { name: 'Samiullah', age: 18, city: 'Faisalabad', student: true }






// Copying object

var car = {
    color: "Black",
    speed: 200
}
var truck = {...car};
console.log(truck === car); // False because this is copy even though the values are same
console.log(truck);   // { color: 'Black', speed: 200 }