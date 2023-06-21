const Calculator = require('./index.js'); // Assuming the Calculator class is defined in a separate file

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should correctly add two positive numbers', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    test('should correctly add a positive and a negative number', () => {
      expect(calculator.add(-2, 7)).toBe(5);
    });

    test('should correctly add two zeros', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should correctly subtract a negative number from a positive number', () => {
      expect(calculator.subtract(3, -7)).toBe(10);
    });

    test('should correctly subtract two zeros', () => {
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should correctly divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should correctly divide a negative number by a positive number', () => {
      expect(calculator.divide(-9, 3)).toBe(-3);
    });

    test('should return undefined and display an error message for division by zero', () => {
      console.log = jest.fn(); // Mocking console.log to prevent it from outputting during the test
      expect(calculator.divide(8, 0)).toBeUndefined();
      expect(console.log).toHaveBeenCalledWith(
        'Error: Division by zero is not allowed.'
      );
    });
  });

  describe('multiply', () => {
    test('should correctly multiply two positive numbers', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('should correctly multiply a positive and a negative number', () => {
      expect(calculator.multiply(-2, 7)).toBe(-14);
    });

    test('should correctly multiply a number by zero', () => {
      expect(calculator.multiply(0, 9)).toBe(0);
    });
  });
});
