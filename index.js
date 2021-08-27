// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Give a short decscription of your project:',
      name: 'info',
    },
    {
      type: 'list',
      message: 'Choose a license:',
      choices: [
        "No License",
        "GNU GPLv3",
        "MIT License"
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Give the steps required to install your project:',
      name: 'install',
    },
    {
      type: "input",
      message: "Provide instructions and examples for use:",
      name: "uses"
    },
    {
      type: "input",
      message: "Enter instructions for making contributions:",
      name: "contributions" 
    },
    {
      type: "input",
      message: "Enter test instructions:",
      name: "test" 
    },
    {
      type: "input",
      message: "Please enter your GitHub username:",
      name: "github" 
    },
    {
      type: "input",
      message: "Please enter your email address:",
      name: "email" 
    },
  ])

// TODO: Create a function to write README file
.then((responses) => {

  let nolic = "This project does not have a license.";
  let lic = "None";
  if(responses.license === "MIT License"){
    nolic = "This project uses a MIT License.";
    lic = "MIT";
  }else if(responses.license === "GNU GPLv3"){
    nolic = "This project uses a GNU GPLv3 License.";
    lic = "GNU GPLv3";
  }


  // Use ${responses.<name>} to access users answers
  const infoDisplay = `# ${responses.name} 
${responses.info}
## Table of Contents:
1. [Installation](#installation)
2. [Uses](#uses)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Installation
${responses.install}
## Usage
${responses.uses}
## License
${nolic}
## Contributing
${responses.contributions}
## Tests
${responses.test}
## Questions
GitHub: [${responses.github}](https://github.com/${responses.github})
Additional questions? Email me at ${responses.email}
  `;
fs.writeFile('README1.md', infoDisplay, (err) =>
  err ? console.log(err) : console.log('Successfully created README!')
  );   
});

