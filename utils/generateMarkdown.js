// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Project Title : ${data.title}
## Project Description:
${data.desc}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
* [License](#license)
* [Author] (#Author)
* [Badges](#badges)
## Installation
${data.instruction}
## Usage
${data.Usage}
## Contributors
${data.Collaborators}
## If you wish to contribute
${data.contributing}
## Questions
If you have any questions, contact ${data.username} on GitHub.
## License
${data.license}
## Test
${data.tests}
### Contact Me
${data.email}
### Link to Github
${data.link}
`;
}

module.exports = generateMarkdown;
