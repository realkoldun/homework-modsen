const products = {
    "apple": 1.5,
    "babnana": 1,
    "mango": 5.6
}

console.log(products);

const productsKeys = Object.keys(products);
console.log(productsKeys);
productsKeys.forEach(key => 
    console.log(`товар ${key} и его цена ${products[key]}`)
);