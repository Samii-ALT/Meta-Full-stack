var purchase1 = {
    shoesPrice: 100,
    taxPrice: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoesPrice * purchase1.taxPrice;
        console.log("Total Price:", calculation)
    }
}
purchase1.totalPrice(); // 120