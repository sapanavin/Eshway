var mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database:"eshwaydb"
});

module.exports = db;

// database:"full-stack-ecommerce"