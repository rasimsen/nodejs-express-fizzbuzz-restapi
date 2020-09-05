"use strict";

const properties = require("../package.json");
const fizzBuzzService = require("../service/fizzbuzz");

const controllers = {
  about: function (req, res) {
    var aboutInfo = {
      name: properties.name,
      version: properties.version,
    };
    res.json(aboutInfo);
  },
  checkNumber: function (req, res) {
    fizzBuzzService.checkNumber(req, res, function (err, fizzBuzzObject) {
      if (err) res.send(err);
      res.json(fizzBuzzObject);
    });
  },
};

module.exports = controllers;
