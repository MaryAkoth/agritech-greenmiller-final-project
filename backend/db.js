// db.js

const mysql = require('mysql2');

// MySQL Database connection
const connection = mysql.createConnection({
  host: 'localhost',      // Database host (assuming it's running locally)
  user: 'root',           // MySQL username (replace 'root' with your username if it's different)
  password: 'your_password', // MySQL password (replace with your actual MySQL password)
  database: 'agritech_db' // The name of your database
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Function to query the database
const queryDatabase = (query, params, callback) => {
  connection.query(query, params, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Export the database connection and query function
module.exports = {
  connection,
  queryDatabase
};
