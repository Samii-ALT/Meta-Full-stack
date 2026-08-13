var Bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var Eagle = Object.create(Bird);
console.log("Eagle: ", Eagle);
console.log("eagle has Wings:", Eagle.hasWings);
console.log("eagle can fly:", Eagle.canFly);
console.log("eagle has feathers:", Eagle.hasFeathers)

var Panguen = Object.create(Bird);
Panguen.canFly = false;
console.log("Panguen: ", Panguen);
console.log("Panguen has Wings:", Panguen.hasWings);
console.log("Panguen can fly:", Panguen.canFly);
console.log("Panguen has feathers:", Panguen.hasFeathers);
