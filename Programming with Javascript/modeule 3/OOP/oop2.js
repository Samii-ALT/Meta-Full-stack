var purchase2 = {
    shoesPrice: 60,
    taxPrice: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoesPrice * purchase2.taxPrice;
        console.log("Total Price:", calculation)
    }
}
purchase2.totalPrice(); // 72