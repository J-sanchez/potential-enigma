// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${projectTittle} 
  ${projectDescription}
  \n* [Installation](#Installation)
  \n* [Instructions](#Instructions)
  \n* [License](#License)
  \n* [Contributors](#Contributors)
  \n* [Author](#Author)
  \n* [Tests](#Tests)
  ## Installation
  ${installationProcess}
  ## Instructions
  ${instruction}
  \`\`\`
  ${instructionExample}
  \`\`\`
  ## License 
  This project is licensed under the ${licenseName} - see the ${licenseUrl} file for details
  ## Contributors
  ${resultContributor}
  ## Tests
  ${tests}
`;
}

module.exports = generateMarkdown;
