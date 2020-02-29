function generateMarkdown(data) {
  return `# ${data.title}
  [![HitCount](http://hits.dwyl.com/{username}/{project}.svg)](http://hits.dwyl.com/{username}/{project})
  [![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]
  ## Description
  * ${data.description}
  ![Questions](utils/images/example.gif)]
   ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)
  ## Installation
  * The following installations are required: ${data.installation}
  ## Usage
  * ${data.usage}
  ## License
  * ${data.license}
  ## Contributing
  * ${data.contributing}
  ## Tests
  * ${data.tests}
  ## Questions
  * ${data.questions}
  ## Github Profile Avatar
  ![Profile Picture](${data.avatar}=250x)
 
`;
}

module.exports = generateMarkdown;
