const inquirer          = require('inquirer');
const fs                = require('fs');
const util              = require('util');

const api               = require('./utils/api');
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
    ])
    // .then(function ({username}) {
    //   const queryUrl = `https://api.github.com/users/${username}`;

    //   axios.get(queryUrl).then(function (res) {
    //     const avatar = res.data.avatar_url;
    //     const email = res.data.email;
    //     console.log('Profile picture: ' + avatar);
    //     console.log('User Email: ' + email);
      
    //   });
      
    // })
    
}

async function init() {
    // console.log('The user has been prompt')
    try {
        const data = await promptUser();
        //pass data from github into data
        const github = await api(data.username);
        //combine
        data.avatar = github;
        

        const markdown = generateMarkdown(data);

        await writeFileAsync('READMe.md', markdown);
      
    } catch(err) {
        console.log(err);
    }
}

init();

