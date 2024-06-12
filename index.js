// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "firstName",
        message: "What is your first name?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is your last name?",
    },
    {
        type: "input",
        name: "age",
        message: "What is your age?",
    },
    {
        type: "input",
        name: "languages",
        message: "What is your favorite programming language?",
        default: "JS",
    }
];

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
            var fileContent = generateMarkdown(answer);
            writeToFile(fileContent)
        });
};

// Function call to initialize app
init();



