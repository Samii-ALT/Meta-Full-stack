var train1 = ["weat", "potato", "milk", "eggs", "tomato"]
console.log(train1[2]);  // it will call milk

var train2 = [0, 1, 2]
console.log(train2[0]);    // it will call zero



// array + function
function list_array(arr){
    for(var i = 1; i<arr.length; i++){
        console.log(i, arr[i])
    }

}
var arr = ["red", "green", "orange", "blue", "purple", 'black', 'yellow']
list_array(arr);