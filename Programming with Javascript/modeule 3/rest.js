// it's inverse to spread use to gather objects.

var [first, ...rest] = [1, 2, 3, 4]
console.log(first) //  1
console.log(rest)  // [2, 3, 4]



// rest in functions

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); //6