const mysql = require('mysql');
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
const chalk = require('chalk');

const PORT = process.env.PORT || 3306;
const express = require('express');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// db connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Passw0rd!', 
    database: 'employeeDB',
});


const addRole = () => {
  const addRoleQuery = `SELECT * FROM roles; SELECT * FROM department;`;
  connection.query(addRoleQuery, (err, results) => {
    if (err) throw err;

    console.log(chalk.blue("List of current roles"));
    console.table(results[0]);

    inquirer
      .prompt([
        {
          name: "newTitle",
          type: "input",
          message: "What is the new title?",
        },
        {
          name: "newSalary",
          type: "input",
          message: "What is the salary amount for the new title:",
        },
        {
          name: "dept",
          type: "list",

          choices: function () {
            let choiceArr = results[1].map((choice) => choice.name); 
            return choiceArr;
          },
          message: "Choose the department for the new title?",
        },
      ])
      .then((answer) => {
        connection.query(`INSERT INTO roles(title, salary, department_id) 
                VALUES(?, ?, 
                (SELECT did FROM department WHERE name = ?))`, 
          [answer.newTitle, answer.newSalary, answer.dept],
          (err, results) => {
            if (err) throw err;
            badCompany();
          }
        );
      });
  });
};

// ...

const deleteRole = () => {
  query = `SELECT * FROM roles`;
  connection.query(query, (err, results) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: "removeRole",
          type: "list",
          choices: function () {
            let choiceArr = results.map((choice) => choice.title);
            return choiceArr;
          },

          message: "Choose a role to delete:",
        },
      ])
      .then((answer) => {
        connection.query(`DELETE FROM roles WHERE ?`, {
          title: answer.removeRole,
        });
        badCompany();
      });
  });
};


// CK
const companyBudget = () => {
};