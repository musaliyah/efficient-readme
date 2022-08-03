//License badge references: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing: 
  [![license]https://img.shields.io/badge/license-${data.license}]

  # Table of Contents:
  - [Description](#description)
  -

`;
}

module.exports = generateMarkdown;
