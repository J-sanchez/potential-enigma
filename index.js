const inquirer = require("inquirer")
const axios = require("axios");
const fs = require('fs');
const path = require('path');
const questions = [
        {
            type: "input",
            message: "What is your Project Title?",
            name: "Title"
        },
        {
            type: "input",
            message: "Provide with a detailed description.",
            name: "Description"
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
            type: "input",
            message: "What License was used? Provide license ",
            name: "license"
        },
        {
            type: "input",
            message: "Will you allow others to contribute to your project? If so provide guidelines and restrictions.",
            name: "contributing"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ];