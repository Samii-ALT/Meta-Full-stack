function addTwoNums(a, b){
    console.log(a+b);
}

addTwoNums("5"+5);


function updated_addTwoNums(a, b){
    try{
        if(typeof(a) != "number"){
            throw new TypeError("First argument is not a number")
        }
        else if(typeof(b) != "number"){
            throw new TypeError("Second argument is not a number")
        }
        else{
            console.log(a+b);
        }
        
    }
    catch(err){
        console.log(err.message);
    }
}
updated_addTwoNums("5", 5)
console.log("It still works")