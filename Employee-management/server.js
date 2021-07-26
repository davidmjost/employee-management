var inquirer = require('inquirer');


inquirer
.prompt([
    {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "EXIT"                
        ]
    }
])