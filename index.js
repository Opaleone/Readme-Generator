// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'What is your project called?',
  name: 'projectName'
},
{
  type: 'input',
  message: 'Give a short description of your project:',
  name: 'description'
},
{
  type: 'input',
  message: 'How do you install this project?',
  name: 'install',
},
{
  type: 'input',
  message: 'How do you use this project?',
  name: 'usage',
},
{
  type: 'list',
  message: 'Which license would you like to use for this project?',
  name: 'license',
  choices: ['MIT', 'Apache', 'GPL', 'None']
},
{
  type: 'input',
  message: 'What is your full name?',
  name: 'fullName'
},
{
  type: 'input',
  message: 'How should someone contribute?',
  name: 'contribute'
},
{
  type: 'input',
  message: 'How can someone test your project?',
  name: 'test'
},
{
  type: 'input',
  message: 'What\'s your GitHub username?',
  name: 'github'
},
{
  type: 'input',
  message: 'What\'s your email?',
  name: 'email'
}];


// TODO: Create a function to write README file
function writeToFile(data) {
  fs.appendFile('./utils/NEW-README.md', generateMarkdown(data), (err) => {
    err ? console.error('Error') : console.log('Success!');
  })
}

// TODO: Create a function to initialize app
// Copied from 
function init() {
  fs.unlink('./utils/NEW-README.md', function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Error occurred while trying to remove file");
    }

  inquirer
  .prompt(questions).then((response) => {
    writeToFile(response)
  });
});
}

// Function call to initialize app
init();
