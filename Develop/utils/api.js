const axios     = require('axios');
const inquirer  = require('inquirer');




//Make into a promise
 function api(username) {
   return new Promise(function(resolve, reject) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function (res) {
      resolve (res.data.avatar_url);
            
            
    }).catch(function (error) {
      reject(error);
    });
   })
  
 };





// async function getUser() {
//   console.log('The user has been prompt for github username')
//   try {
//     const {username} = inquirer.prompt([
//       {
//       type: 'input',
//       message: 'What is your Github Username?',
//       name: 'username'
//       }
//     ]);

//     const {github} =  axios.get(
//       `https://api.github.com/users/${username}`
      
//      );
//   } catch (err) {
//       // console.log('User does not exist');
//       console.log(err);
//     }
//     // console.log(github);
//  }

//  getUser();

module.exports = api;
