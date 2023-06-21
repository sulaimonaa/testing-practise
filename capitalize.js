function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return string;
  }

  const firstChar = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1);

  return firstChar + restOfString;
}

module.exports = capitalize;
