// Constructor is used to construct new object.

// date() is built in constructor  in JS

var date1 = new Date();
console.log(date1)
// it will make date1 object with value of current date.

var date2 = new Date("2026-08-13");
console.log(date2)
// makes obj date2 with our assigned value
// "new" keyword is used to make new obj..



// Custom Constructor
function icecream(flavor) {
    this.flavor = flavor;

    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");