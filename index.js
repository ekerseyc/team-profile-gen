const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const replaceToken = (template, token, newValue) => {
  const regex = new RegExp("~{ " + token + " }~", "gm");
  return template.replace(regex, newValue);
};

const makeCard = (answers) => {
  const obj = JSON.parse(answers);
  let template = fs.readFileSync(path.resolve('./src', 'card.html'), "utf-8");
  template = replaceToken(template, 'name', obj.name); 
  return template;
};

function makeHTML(answers) {
  let template = fs.readFileSync(path.resolve('./src', 'template.html'), "utf-8");
  template = replaceToken(template, 'employees', makeCard(answers));
  return template;
}


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter employee\'s name',
      name: 'name',
    },
    {
        type: 'input',
        message: 'Enter employee\'s ID number',
        name: 'id',
      },
    {
      type: 'input',
      message: 'Enter employee\'s email',
      name: 'email',
    },
    {
        type: 'list',
        message: 'Choose employee\'s role',
        name: 'role',
        choices: [
          { value: 'Manager' },
          { value: 'Engineer' },
          { value: 'Intern' },
        ]
      },
      {
        type: 'list',
        message: 'Enter another employee\'s information?',
        name: 'again',
        choices: [
          { value: 'Yes' },
          { value: 'No' },
        ]
      }
  ])
  .then((answers) => {
    fs.writeFile('./dist/index.html', makeHTML(JSON.stringify(answers, null, 2)), (err) => {
    err ? console.error(err) : console.log('success')
    });
});