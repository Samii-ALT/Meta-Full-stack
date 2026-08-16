const dishData = [
    { name: 'Italian pasta', price: 9.55 },
    { name: 'Rice with veggies', price: 8.65 },
    { name: 'Chicken with potatoes', price: 15.55 },
    { name: 'Vegetarian Pizza', price: 6.45 }
];

function receipt(par) {
    const tax = 0.20;

    if (par === true) {
        console.log("Prices with 20% tax:");

        for (const item of dishData) {
            const finalPrice = item.price * (1 + tax);
            console.log(`Dish: ${item.name} Price: $ ${finalPrice.toFixed(2)}`);
        }
    } else {
        console.log("Prices without tax:");

        for (const item of dishData) {
            console.log(`Dish: ${item.name} Price (excl.tax): $ ${item.price.toFixed(2)}`);
        }
    }
}

receipt(true);
receipt(false);