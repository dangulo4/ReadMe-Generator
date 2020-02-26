function generateMarkdown(data) {
  return `# ${data.title}
  [![Build Status](https://dev.azure.com/vscode/VSCode/_apis/build/status/VS%20Code?branchName=master)](https://dev.azure.com/vscode/VSCode/_build/latest?definitionId=12)
  ## ${data.description}
  ## Table of Contents
  - [Installation](#Installation)
  > ${data.installation}
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)

`;
}

module.exports = generateMarkdown;

