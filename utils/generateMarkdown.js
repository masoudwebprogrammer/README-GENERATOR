const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

function generateMarkdown(answer) {

  return `
  Your First Name Is: ${answer.firstName}

  Your Last Name Is: ${answer.lastName}

  You Are: ${answer.age} Years Old.

  Your Favorite Programming Language Is: ${answer.languages}
`;
}

module.exports = generateMarkdown;