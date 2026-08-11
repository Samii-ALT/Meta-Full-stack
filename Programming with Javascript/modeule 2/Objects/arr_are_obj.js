function arrayBuilder(zero, one, two, three){
    var arr = []
    arr.push(zero);
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}

var Simple_Arr = arrayBuilder("Green", "Blue", "Red", "Orange");
console.log(Simple_Arr);