// classic use of a function | function declaration
function square1(number1) {
    return number1 * number1;
  }
  console.log(square1(4));

// Modern use of a function | function expression
const square2 = function (number2) {
    return number2 * number2;
  };
  console.log(square2(6));

// Modern use of a function | arrow function
const square3 = number3 => number3 * number3;
  console.log(square3(8));