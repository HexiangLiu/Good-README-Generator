const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
  { name: 'Title', message: 'Project Title:' },
  { name: 'Description', message: 'Description:' },
  {
    type: 'confirm',
    name: 'TableContent',
    message: 'Include table content?:',
  },
  { name: 'Installation', message: 'Installation:' },
  {
    type: 'list',
    name: 'License',
    message: 'What license do you want to choose',
    choices: [
      'Apache License 2.0',
      'GNU GPLv3',
      'GNU GPL v2',
      'MIT',
      'ISC',
      'Mozilla',
    ],
  },
  { name: 'Usage', message: 'Usage:' },
  { name: 'Credit', message: 'Credit:' },
  { name: 'Contribute', message: 'Contribute:' },
  { name: 'Tests', message: 'Tests:' },
  { name: 'Username', message: 'Github Username:' },
  { name: 'Email', message: 'Email Address:' },
];

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    for (const property in answers) {
      console.log(answers[property]);
      switch (property) {
        /**********Add title**********/
        case 'Title':
          fs.appendFile(
            'README.md',
            `\n # ${answers[property]} \n`,
            (error) => error && console.log(error)
          );
          break;

        /**********Add table content**********/

        case 'TableContent':
          //Only generate table content if user confirmed
          answers[property] &&
            fs.appendFile(
              'README.md',
              `## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [Credits](#credits) \n * [Contribute](#Contribute) \n* [Tests](#Tests) \n * [License](#license) \n`,
              (error) => error && console.log(error)
            );
          break;

        /**********Add license**********/

        case 'License':
          const fd = fs.openSync('README.md', 'w+');
          let badge;
          switch (answers[property]) {
            case 'Apache License 2.0':
              badge =
                '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
              break;
            case 'GNU GPLv3':
              badge =
                '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
              break;
            case 'GNU GPL v2':
              badge =
                '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
              break;
            case 'MIT':
              badge =
                '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
              break;
            case 'ISC':
              badge =
                '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
              break;
            case 'Mozilla':
              badge =
                '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
              break;
          }

          fs.write(fd, `${badge}`, 0, (error) => error && console.log(error));

          fs.appendFile(
            'README.md',
            `## ${property} \n ${answers[property]} \n`,
            (error) => error && console.log(error)
          );
          break;

        /**********Add Questions**********/
        case 'Username':
          fs.appendFile(
            'README.md',
            `## Questions \n [My Github!](https://github.com/${answers[property]}) <br>`,
            (error) => error && console.log(error)
          );
          break;
        case 'Email':
          fs.appendFile(
            'README.md',
            `${answers[property]}  Contact me through email if any questions`,
            (error) => error && console.log(error)
          );
          break;

        /**********Add Installation, Usage, Credit, Contribute, Test**********/
        default:
          fs.appendFile(
            'README.md',
            `## ${property} \n ${answers[property]} \n`,
            (error) => error && console.log(error)
          );
      }
    }
  });
}

// function call to initialize program
init();
