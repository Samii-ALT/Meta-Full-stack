// for of loop is used to iterate over objects.. remember that the objects can't be 
// iterate directly so we have to convert it in array first with some built-in methods

var car = {
    speed: 200,
    color: "Blue"
}

console.log(Object.keys(car)); // ["speed", "color"]

console.log(Object.values(car)); // [200, "Blue"]


console.log(Object.entries(car)); // [ [ 'speed', 200 ], [ 'color', 'Blue' ] ]


var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key])
}