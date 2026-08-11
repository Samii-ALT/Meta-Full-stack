var test = typeof(2);
console.log(test); //Number

var test = typeof(3.5);
console.log(test); //Number

var test = typeof(true);
console.log(test); // Boolean

var test = typeof(2>5);
console.log(test); // Boolean

var test = typeof("Sami");
console.log(test); //String

var test = typeof([1, 2, 3]);
console.log(test); // Object (Arrays are obj in js)

var test = typeof(function abc(){console.log("abc")});
console.log(test);// Function