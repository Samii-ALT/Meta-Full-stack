try{
    console.log(a+b)
}catch(err){
    console.log("There was an error");
}
console.log("The program is stil running")




try{
    throw new ReferenceError;
}catch(err){
    console.log("there was a reference error.")
}
console.log("Program not stopped")