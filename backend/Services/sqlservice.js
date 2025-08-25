const mysql = require("mysql2");
require("dotenv").config();
const config = require("../config");

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.db.port,
});

function connectDb() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the MySQL database.");
  });
}

function connect() {
  return connection;
}

module.exports = {connectDb, connect};
