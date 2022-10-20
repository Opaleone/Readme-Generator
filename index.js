// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your project called?', 'Give a short description of your project:', 'How do you install this project?', 'How do you use this project?', 'Which license would you like to use for this project?', 'How should someone contribute?', 'How can someone test your project?', 'Where should someone go to find answers?'];

inquirer
  .prompt([
    {
      type: 'Input',
      message: questions[0],
      name: 'projectName'
    },
    {
      type: 'Input',
      message: questions[1],
      name: 'description'
    },
    {
      type: 'Input',
      message: questions[2],
      name: 'install',
    },
    {
      type: 'Input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'List',
      message: questions[4],
      name: 'license',
      options: ['MIT', 'Apache', 'GPL']
    },
    {
      type: 'Input',
      message: questions[5],
      name: 'contribute'
    },
    {
      type: 'Input',
      message: questions[6],
      name: 'test'
    },
    {
      type: 'Input',
      message: questions[7],
      name: 'questions'
    }
  ]).then((response) => {
    writeToFile(response)
  })

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('NEW-README.md', generateMarkdown(data), (err) => {
    err ? console.error('Error') : console.log('Success!');
  })
}

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
