const util = require("util")
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/user");

const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
      },   
      {
        type: "input",
        message: "What is your GitHub URL?",
        name: "Link"
      }, 
    {
        type: "input",
            message: "What is your Project Title?",
        name: "title"
            },
        {
            type: "input",
            message: "Provide with a detailed description.",
            name: "desc"
        },
        {
            type: "input",
            message: "Provide a guided Table of Contents.",
            name: "Contents"
        },
        {
            type: "input",
            message: "Instalation, What steps are needed to install the project?",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "Usage"
        },
        {
            type: "input",
            message: "List the collaborators on the project.",
            name: "Collaborators"
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        },
        {
            type: "input",
            message: "Will you allow others to contribute to your project? If so provide guidelines and restrictions.",
            name: "contributing"
        },
        {
            type: "input",
            message: "Enter your email",
            name: "Email"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ];

        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, err => {
                if (err) {
                  return console.log(err);
                }
              
                console.log("Success! Your README.md file has been generated")
            });
        }
        
        const writeFileAsync = util.promisify(writeToFile);
        
        
        async function init() {
            try {
        
                // Prompt Inquirer questions
                const userResponses = await inquirer.prompt(questions);
                console.log("Your responses: ", userResponses);
                console.log("Getting Github Repo");
            
                const userInfo = await api.getUser(userResponses);
                console.log("Your GitHub user info: ", userInfo);
            
                console.log("Generating your README next...")
                const markdown = generateMarkdown(userResponses, userInfo);
                console.log(markdown);
            
                await writeFileAsync('README.md', markdown);
        
            } catch (error) {
                console.log(error);
            }
        };
        
        init();