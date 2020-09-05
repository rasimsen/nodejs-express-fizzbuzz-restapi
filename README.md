# FizzBuzz Game With Node.js/Express/TDD

## What is the FizzBuzz problem?

The FizzBuzz problem is a frequently asked question in technical interviews. In real life, it is a game which is played by a group of people. The rules are quite straightforward.
The Rules:

- The sequence of turns is decided before starting the game.
- The first player starts by saying any number (usually the number 1).
- The next player says the next number, and so on. However, the following is the tricky part:
  - Say the word Fizz instead of the number when it is a multiple of 3.
  - Say Buzz if it is a multiple of 5.
  - Say FizzBuzz if it is a multiple of both 3 and 5.
- The rules to say these words can be changed. For example, saying FizzBuzz when a number is a multiple of both 7 and 9.

If you say the wrong number or word, you’re out! The last player standing wins the game.

# Setup

- Create a directory for the project
  `mkdir FizzBuzz-App`

- Enter the newly created directory
  `cd FizzBuzz-App`

- Confirm Node is installed
  `node -v`

- Confirm npm command-line package is available
  `npm -v`

- Create a package.json file
  `npm init -y`

- Install Jest locally within only this directory
  `npm install --save-dev jest`

- Express installation
  `npm i express`

# Run Tests

to run tests:
`npm test`

to see the code coverages:
`npx jest --coverage`

https://jestjs.io/docs/en/getting-started
