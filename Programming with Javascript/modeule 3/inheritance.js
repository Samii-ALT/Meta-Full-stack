class Animal{
    eat(){
        console.log("Animal is eating")
    }
}
class Mammal extends Animal{

}
class Elephant extends Mammal{

}

var c = new Elephant();
c.eat();