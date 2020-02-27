const axios     = require('axios');
const inquirer  = require('inquirer');
require('dotenv').config();


getUser();

async function getUser() {
  try {
    const {username} = await inquirer.prompt({
      name: 'username',
      message: 'What is your Github Username?'
    });

    const {data} = await axios.get(
      `https://api.github.com/users/${username}`
     );
    
    console.log(data);

    } catch (err) {
      console.log('User does not exist');
      console.log(err);
    }
 }

// const api = {
//   getUser(username) {
//     return axios
//       .get(`https://api.github.com/users/${username}?client_id=${
//         process.env.CLIENT_ID
//       }&client_secret=${process.env.CLIENT_SECRET}`
//     ).catch(err => {
//       console.log('User not found')
//       process.exit(1);
//     });

//   }
// };

module.exports = api;
