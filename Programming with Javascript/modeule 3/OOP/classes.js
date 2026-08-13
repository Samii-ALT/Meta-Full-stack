class Car{
    constructor(colour, speed){
        this.colour = colour;
        this.speed = speed;
    }
    turboOn(){
        console.log("Turbo is on!")
    }
}

var car1 = new Car("red", 230);
car1.turboOn();