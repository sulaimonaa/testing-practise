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
  // let splitString = string.split('');
  // let reversedString = splitString.reverse();
  // let joinString = reversedString.join('');

  if (string === '') {
    throw new Error('No empty string');
  }

  return reversedString;
};

const myString = '';
console.log(reverseString(myString));
