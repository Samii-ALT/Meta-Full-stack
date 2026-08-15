var fruits = ['kiwi', 'mango', 'Banana', 'grapes'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex);


console.log("------------------------------------------------------------")


const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggie, index){
    console.log(`${index}. ${veggie}`)
});