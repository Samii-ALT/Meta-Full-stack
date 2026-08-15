const car = {
    engine: true,
    steering: true,
    speed: "Slow"
}

const sporstCar = Object.create(car)
sporstCar.speed = "Fast";

console.log("--------for-in Loop is not relaible")
for(prop in sporstCar){
    console.log(prop)
}
// sportCar object only have speed property but it will print car properties too 
// that's why it is un relaible....

console.log('---------for-of loop is relaible--------')

for(prop of Object.keys(sporstCar)){
    console.log(prop+": "+sporstCar[prop])
}

// It will only show the speed property of Sportscar because it only have that