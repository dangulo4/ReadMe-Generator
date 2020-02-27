const axios     = require('axios');
const inquirer  = require('inquirer');

return inquirer
 .prompt({
  type: 'input',
  name: 'username',
  message: 'What is your Github Username?'
  
 })

 .then(function ({username}) {
   const queryUrl = `https://api.github.com/users/${username}`;

   axios
   .get(queryUrl)
   .then(function (res) {
     console.log(res.data);
   });
 });



// getUser();

// async function getUser() {
//   console.log('The user has been prompt for github username')
//   try {
//     const {username} = await inquirer.prompt({
//       type: 'input',
//       message: 'What is your Github Username?',
//       name: 'username'
      
//     });

//     const {github} = await axios.get(
//       `https://api.github.com/users/${username}`
//      );
    
//     console.log(github);

//     } catch (err) {
//       // console.log('User does not exist');
//       console.log(err);
//     }
//  }

module.exports = api;
