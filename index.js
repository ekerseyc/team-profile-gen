const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
var employeeArr = [];

const replaceToken = (template, token, newValue) => {
  const regex = new RegExp("~{ " + token + " }~", "gm");
  return template.replace(regex, newValue);
};

const makeCard = (answers) => {
  console.log(employeeArr);
  const obj = JSON.parse(JSON.stringify(employeeArr));
  var cards = '';
  for (let i = 0; i < employeeArr.length; i++) {
    var custom = '';
    let template = fs.readFileSync(path.resolve('./src', 'card.html'), "utf-8");
    template = replaceToken(template, 'name', obj[i].name);
    template = replaceToken(template, 'role', obj[i].role);
    template = replaceToken(template, 'id', obj[i].id);
    template = replaceToken(template, 'email', '<a href="mailto:' + obj[i].email + '">' + obj[i].email + '</a>');
    if (obj[i].github) {
    custom = 'Github: <a href="http://github.com/' + obj[i].github + '" target="_blank">' + obj[i].github + '</a>'
    }
    if (obj[i].school) {
      custom = 'School: ' + obj[i].school
      }
      if (obj[i].office) {
        custom = 'Office Number: ' + obj[i].office
        }
    template = replaceToken(template, 'custom', custom);
    cards += template;
  }
  return cards;
};

function makeHTML(answers) {
  let template = fs.readFileSync(path.resolve('./src', 'template.html'), "utf-8");
  template = replaceToken(template, 'employees', makeCard(answers));
  return template;
}

const questions = [
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
    type: 'input',
    message: 'Enter github username',
    name: 'github',
    when:(answers) => {
      if(answers.role === 'Engineer') {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter school name',
    name: 'school',
    when:(answers) => {
      if(answers.role === 'Intern') {
        return true;
      }
    }
  },
  {
    type: 'input',
    message: 'Enter office number',
    name: 'office',
    when:(answers) => {
      if(answers.role === 'Manager') {
        return true;
      }
    }
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
];

function questionnaire() {
  return inquirer
    .prompt(questions)

    .then((answers) => {
      var empt = '';
      if (answers.role === 'Engineer') {
        empt = new Engineer(answers.name, answers.id, answers.email, answers.github)
      }
      if (answers.role === 'Manager') {
        empt = new Manager(answers.name, answers.id, answers.email, answers.office)
      }
      if (answers.role === 'Intern') {
        empt = new Intern(answers.name, answers.id, answers.email, answers.school)
      }
      employeeArr.push(empt);
      if (answers.again === 'No') {
        fs.writeFile('./dist/index.html', makeHTML(JSON.stringify(answers, null, 2)), (err) => {
          err ? console.error(err) : console.log('success')
        });
      }
      else {
        console.log(employeeArr);
        questionnaire();
      }
    });
}

questionnaire();
