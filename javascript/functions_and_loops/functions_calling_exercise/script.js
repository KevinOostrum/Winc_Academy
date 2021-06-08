// execise ageCheck
const ageCheck = function(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

const greeting = function(age) {
    const result = ageCheck(age);
    if (result === false){
        return "Hey Kiddo"
    }
    else {
        return "Hello There"
    }
}

console.log(greeting(19));
console.log(greeting(12));

// exercise VAT calculation

// base price, VAT and return total
const fullPrice = function (number1, number2){
    const addVat = number1 * number2;
    return addVat;
}

const priceCheck = function () {
console.log(fullPrice(1000, 1.21))
console.log(fullPrice(2, 1.09))
}
priceCheck()

// version 2
const calcBasePrice = function(total, vat) {
    const basePrice = total / ((100 + vat) / 100);
    return basePrice;
};

const basePriceVat = function(total, vat) {
    const basePrice = calcBasePrice(total, vat);
    const VAT = total - basePrice;
    return [basePrice, VAT];
};

console.log(basePriceVat(1210, 21));