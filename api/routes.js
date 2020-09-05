"use strict";

const fizzBuzzController = require("./controller");

module.exports = function (app) {
  app.route("/about").get(fizzBuzzController.about);
  app
    .route("/fizzbuzz/check-number/:gameNumber")
    .get(fizzBuzzController.checkNumber);
};
