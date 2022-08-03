//A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//License badge references: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  const licenses = data.license;
  const selectedLicense = '';
  if (licenses === ''){
    selectedLicense = '';
  } else if (licenseType === 'Apache' ){
      pickedLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (licenseType === 'Boost'){
      pickedLicense = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  } else if (licenseType === 'BSD'){
      pickedLicense = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  } else if (licenseType === 'Creative Commons' ){
      pickedLicense = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`
  } else if (licenseType === 'Eclipse'){
      pickedLicense = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
  } else if (licenseType === 'GNU'){
      pickedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (licenseType === 'IBM'){
      pickedLicense = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  } else if (licenseType === 'ISC'){
      pickedLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  } else if (licenseType === 'MIT'){
      pickedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (licenseType === 'Mozilla'){
      pickedLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else if (licenseType === 'Public Domain Dedication and License'){
      pickedLicense = `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]`
  } else if (licenseType === 'Perl'){
      pickedLicense = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
  } else if (licenseType === 'SIL'){
      pickedLicense = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`
  } else if (licenseType === 'Unlicense'){
      pickedLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
  }
  return pickedLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
