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

module.exports = api;
