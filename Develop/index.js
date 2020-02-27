const inquirer          = require('inquirer');
const fs                = require('fs');
const util              = require('util');
// const axios             = require('axios');
// const api               = require('./utils/api');
const generateMarkdown  = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github user name?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter a project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description?'
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Are there any installations required?'
        },
        {
          type: 'input',
          name: 'usage',
          message: 'What is the usage?'
        },
        {
          type: 'input',
          name: 'license',
          message: 'Are there any license?'
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Who is contributing?'
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Are there any tests?'
        },
        {
          type: 'input',
          name: 'questions',
          message: 'Are there any questions?'
        }
    ]);
}
// const questions = [

// ];



async function init() {
    console.log('The user has been prompt')
    try {
        const data = await promptUser();

        // const api = api(data);

        const markdown = generateMarkdown(data);

        await writeFileAsync('READMe.md', markdown);
      
    } catch(err) {
        console.log(err);
    }
}

init();

