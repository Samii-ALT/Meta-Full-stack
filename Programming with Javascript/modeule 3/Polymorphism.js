/* Polymorphism
Poly = Many ,  morph = forms */

const bicycle = {
    bell: function(){
        return "Ring, ring!, Watch out please"
    }
}

const door = {
    bell: function(){
        return "Ring, ring!, Please come in"
    }
}

bicycle.bell(); // Ring, ring!, Watch out please
door.bell();   //  Ring, ring!, Please come in

// both objects have same named function "bell" but in different forms.


function ringTheBell(thing){
    console.log(thing.bell());
}

ringTheBell(bicycle); // Ring, ring!, Watch out please
ringTheBell(door);   //  Ring, ring!, Please come in




class Bird{
    fly(){
        console.log("The bird is flying");
    }
}
class Eagle extends Bird{
    fly(){
        super.fly();   // Bird fly function will execute
        console.log("Eagle is flying")
    }
}
