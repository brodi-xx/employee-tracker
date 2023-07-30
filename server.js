const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// db connection
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'department_db'
  },
  console.log(`Connected to the department_db database.`)
);