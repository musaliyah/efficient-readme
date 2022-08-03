//License badge references: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing: 
  [![license]https://img.shields.io/badge/license-${data.license}]

  # Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage]($usage)
  - [Testing](#testing)
  - [Username](#username)
  - [Email](#email)

  ## Description: 
  ${data.description}

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## Testing: 
  ${data.testing}

  ## License: 
  ${data.license}


  ## Username:

  ### If you have any questions you can reach me at: 
  ${data.email} <br />
  - or at my Github: [Github](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
