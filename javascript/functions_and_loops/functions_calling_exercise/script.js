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
const calcVat = function (total, vat){
    const vatAmmount = total/(vat + 1);
    return vatAmmount;
}

const basePrice = function (total, vat){
    const results = [];
    const sum = calcVat(total, vat);
    const final = total - sum;
    results.push(final,sum)
    return results
}

console.log(basePrice(1210, 0.21))