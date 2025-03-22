let a = 10, b = 5;

const operations = {
  addition: a + b,
  subtraction: a - b,
  multiplication: a * b,
  division: a / b,
  modulus: a % b,
};

console.log("Addition: ", operations.addition);
console.log("Subtraction: ", operations.subtraction);
console.log("Multiplication: ", operations.multiplication);
console.log("Division: ", operations.division);
console.log("Modulus: ", operations.modulus);


let x = 10;
console.log("Initial value of x: ", x);

x = modifyValue(x, 5, '+');
console.log("After x += 5: ", x);

x = modifyValue(x, 3, '-');
console.log("After x -= 3: ", x);

x = modifyValue(x, 2, '*');
console.log("After x *= 2: ", x);

x = modifyValue(x, 4, '/');
console.log("After x /= 4: ", x);

x = modifyValue(x, 3, '%');
console.log("After x %= 3: ", x);

function modifyValue(currentValue, operand, operation) {
  switch (operation) {
    case '+':
      return currentValue + operand;
    case '-':
      return currentValue - operand;
    case '*':
      return currentValue * operand;
    case '/':
      return currentValue / operand;
    case '%':
      return currentValue % operand;
    default:
      return currentValue;
  }
}