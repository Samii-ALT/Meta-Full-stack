// Use of this keyword...

var purchase1 = {
    shoesPrice: 100,
    taxPrice: 1.2,
    totalPrice: function(){
        var calculation = this.shoesPrice * this.taxPrice;
        console.log("Total Price:", calculation)
    }
}
purchase1.totalPrice(); // 120


var purchase2 = {
    shoesPrice: 60,
    taxPrice: 1.2,
    totalPrice: function(){
        var calculation = this.shoesPrice * this.taxPrice;
        console.log("Total Price:", calculation)
    }
}
purchase2.totalPrice(); // 72