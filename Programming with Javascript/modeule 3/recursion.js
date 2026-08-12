var counter = 3;
function example(){
    console.log("Print");
    counter = counter-1;
    if(counter === 0){return}
    example();          // If there will be no condition like counter === 0 then the loop 
}                       // will run infinetly here the recursion will call then

example();