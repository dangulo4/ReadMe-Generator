function generateMarkdown(data) {
  return `# ${data.title}
  [![Build Status](https://dev.azure.com/vscode/VSCode/_apis/build/status/VS%20Code?branchName=master)](https://dev.azure.com/vscode/VSCode/_build/latest?definitionId=12)
  ## ${data.description}
  ![Questions](utils/images/example.gif)*Prompt User*[about https://github.com/dangulo4/ReadMe-Generator/tree/master/Develop]
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
  ${data.username}
  ## Github email
`;
}

module.exports = generateMarkdown;

// ![GIF] ![alt text](utils/example.gif)