const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// array of questions for user
const questions = [
  { name: 'title', message: 'Project Title:' },
  { name: 'description', message: 'Description:' },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const { title, description } = answers;
    fs.appendFile(
      'README.md',
      `# ${title} \n`,
      (error) => error && console.log(error)
    );
    fs.appendFile(
      'README.md',
      `## Description \n ${description} \n`,
      (error) => error && console.log(error)
    );
    fs.appendFile(
      'README.md',
      `## Description \n ${description} \n`,
      (error) => error && console.log(error)
    );
    fs.appendFile(
      'README.md',
      `## Table of Contents \n 
      * [Installation](#installation)
      * [Usage](#usage)
      * [Credits](#credits)
      * [License](#license)`,
      (error) => error && console.log(error)
    );
  });
}

// function call to initialize program
init();
