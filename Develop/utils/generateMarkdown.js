function generateMarkdown(data) {
  return `# ${data.title}
  [![Build Status](https://dev.azure.com/vscode/VSCode/_apis/build/status/VS%20Code?branchName=master)](https://dev.azure.com/vscode/VSCode/_build/latest?definitionId=12)
  ## ${data.description}

`;
}

module.exports = generateMarkdown;

