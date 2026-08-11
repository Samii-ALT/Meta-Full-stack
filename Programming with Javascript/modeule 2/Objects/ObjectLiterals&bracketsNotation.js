var house = {}
house["rooms"] = 4;
house["colour"] = "pink";
house["PriceUSD"] = 1234;
console.log(house)


var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}



var arrofkey = ["speed", "altitude", "color"]
var drone={
    speed: 100,
    altitude: 200,
    color: "White"
}

for(var i=0; i<arrofkey.length; i++){
    console.log(drone[arrofkey[i]]);
}