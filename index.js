const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the manager\'s name?',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Enter manager\'s ID number',
        name: 'id',
      },
    {
      type: 'input',
      message: 'What is the manager\'s email',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number',
        name: 'officeNumber',
      },
  ])
  .then((answers) => {
    fs.writeFile('index.html', JSON.stringify(answers, null, 2), (err) => {
    err ? console.error(err) : console.log('success')
    });
});