module.exports = {
  fizzBuzzImpl: function (checkNumber) {
    if (
      checkNumber === null ||
      checkNumber === "undefined" ||
      checkNumber <= 0
    ) {
      return "Invalid";
    } else if (checkNumber % 15 === 0) {
      return "FizzBuzz";
    } else if (checkNumber % 5 === 0) {
      return "Buzz";
    } else if (checkNumber % 3 === 0) {
      return "Fizz";
    } else {
      return "Invalid";
    }
  },
};
