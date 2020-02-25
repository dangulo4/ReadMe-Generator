const inquirer  = require('inquirer');
const fs        = require('fs');
// const axios     = require('axios');
// const util      = require('util');

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
        }
    ]);

// const questions = [

// ];
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),
    data);
}

async function init() {
    console.log('The user has been prompt')
    try {
        await promptUser();
    } catch(err) {
        console.log(err);
    }
}

init();
