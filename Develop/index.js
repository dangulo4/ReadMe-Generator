const inquirer  = require('inquirer');
const fs        = require('fs');
const util      = require('util');

// const open              = require('open');
// const api               = require('./api');
const generateMarkdown  = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
        }
    ]);
}
// const questions = [

// ];



async function init() {
    console.log('The user has been prompt')
    try {
        const data = await promptUser();

        const markdown = generateMarkdown(data);

        await writeFileAsync('READMe.md', markdown);
      
    } catch(err) {
        console.log(err);
    }
}

init();

