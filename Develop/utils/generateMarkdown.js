function generateMarkdown(data) {
  return `# ${data.title}
  [![Build Status](https://dev.azure.com/vscode/VSCode/_apis/build/status/VS%20Code?branchName=master)](https://dev.azure.com/vscode/VSCode/_build/latest?definitionId=12)
  ## ${data.description}
  ![Prompt User](/utils/images/example.gif)
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
  ## Github email
`;
}

module.exports = generateMarkdown;

