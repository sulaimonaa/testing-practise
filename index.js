const stringLength = (string) => {
  const length = string.length;

  if (length === 0) {
    throw new Error('String must be at least 1 character long.');
  }

  if (length > 10) {
    throw new Error('String cannot be longer than 10 characters.');
  }

  return length;
};

const reverseString = (string) => {
  const reversedString = string.split('').reverse().join('');

  if (string === '') {
    throw new Error('No empty string');
  }

  return reversedString;
};

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.log('Error: Division by zero is not allowed.');
      return undefined;
    }
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
