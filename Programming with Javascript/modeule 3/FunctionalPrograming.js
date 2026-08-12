var currencyOne = 100;
var currencyTwo = 0;
var conversionRate = 1.2;

function conversion(amount, rate){
    return amount*rate
}

currencyTwo = conversion(currencyOne, conversionRate);
console.log(currencyTwo);