// this function will check if a number is big
const sizeCheck = function(number1) {
    if (number1 >= 100) {
    return true; }
    
    return false;
}
// calling the function
const amIbig = sizeCheck(101);
console.log(amIbig);

// this function calculated the average number of a given array

const averageNumber = function(numbers){
    const average = numbers.reduce((total, numbers) => total + numbers)/numbers.length;
    return average; };

const numbers = [42.71901, 52.931, 68.7224, 27.6389, 239.81];
const avgResult = averageNumber(numbers);

console.log(avgResult) // direct result, big unrounded numbers
console.log(Math.round(avgResult)); // result as a rounded number