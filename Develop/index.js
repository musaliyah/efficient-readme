//packages 

const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? '
    },
    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project: '
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions of how to use your project: '
    },
    // Credits
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators GitHub usernames'
    },
    // Testing
    {
        type: 'input',
        name: 'testing',
        message: 'What tests can you perform?'
    },
    // License (License list from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
    {
        type: 'list',
        name: 'license',
        message: 'Please select what license type your project is: ',
        choices:['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Database', 'Public Domain Dedication and License', 'Perl', 'SIL', 'Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    }
    
];

//Write to README.md file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log (err) : console.log('Created README.md')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(response){
            console.log(response)
            writeToFile("README.md", generateMarkdown (response));
        });

}

// Function call to initialize app
init();
