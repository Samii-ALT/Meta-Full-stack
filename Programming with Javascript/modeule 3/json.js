var jsonstr = '{"greeting":"hello"}'

var plainTXT = JSON.parse(jsonstr)
console.log(plainTXT) // { greeting: 'hello' }

plainTXT.greeting = "hi";
console.log(plainTXT)    // { greeting: 'hi' }

Data = {
    name: "Sami",
    age: 17
}
console.log(JSON.stringify(Date))