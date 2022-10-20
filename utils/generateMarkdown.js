// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const mitLicense = 'https://opensource.org/licenses/MIT';

const apacheLicense = 'https://www.apache.org/licenses/LICENSE-2.0';

const gplLicense = 'https://www.gnu.org/licenses/gpl-3.0.en.html';

function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === 'None') {
    return '';
  } else {
    return '* [License](#license)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `## License
${mitLicense}`
  } else if (license === 'Apache') {
    return `## License
${apacheLicense}`
  } else if (license === 'GPL') {
    return `## License
${gplLicense}`
  } else if ('None'){
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.projectName}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#how-to-contribute)
* [Testing](#how-to-test)
* [FAQ](#faq)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## How to Contribute
${data.contribute}

## How to Test
${data.test}

## FAQ
Visit my GitHub page below for general questions!

[Github FAQ](https://github.com/${data.github})

For specific questions, email me at ${data.email}

`;
}

module.exports = generateMarkdown;
