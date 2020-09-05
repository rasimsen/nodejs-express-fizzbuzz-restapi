const circular = require("circular");
const fizzBuzzHelper = require("./fizsbuzz-helper");

module.exports = {
  checkNumber: function (req, res, next) {
    //req.params.city
    console.log(circular(req.params));
    res.send({
      number: req.params.gameNumber,
      result: fizzBuzzHelper.fizzBuzzImpl(req.params.gameNumber),
    });
  },
};

/**
 * module.exports and exports?
 *
 * Here we’re assigning the functions and values we want to 
 * export to an exports property on module
 * 
 * an example: 
    module.exports = {
      getName: () => {
        return 'Jim';
      },

      getLocation: () => {
        return 'Munich';
      },

      dob: '12.01.1982',
    };
 * usage : 
    const { getName, dob } = require('./user');
    console.log(
      `${getName()} was born on ${dob}.`
    );
 * 
 * exports : Exporting Multiple Methods and Values
 * We can export multiple methods and values in the same way: 
 *
 * an example : 
    const getName = () => {
      return 'Jim';
    };

    const getLocation = () => {
      return 'Munich';
    };

    const dateOfBirth = '12.01.1982';

    exports.getName = getName;
    exports.getLocation = getLocation;
    exports.dob = dateOfBirth;

 * usage : 
    const user = require('./user');
    console.log(
      `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
    );
 *
 */
