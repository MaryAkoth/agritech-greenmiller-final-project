// backend/app.js

const express = require('express'); // Ensure express is installed
const bodyParser = require('body-parser');
const db = require('./db'); // Ensure db.js is in the same directory

const app = express();

// Use bodyParser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Default route for testing server status
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route to get all farmers
app.get('/farmers', (req, res) => {
  const query = 'SELECT * FROM farmers';
  
  db.queryDatabase(query, [], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Error fetching data from the database');
    }
    res.json(results);
  });
});

// Start the server on port 5000
const PORT = 5001;
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
// Add a new farmer
app.post('/farmers', (req, res) => {
  const { name, location, contact } = req.body;
  const query = 'INSERT INTO farmers (name, location, contact) VALUES (?, ?, ?)';
  
  db.query(query, [name, location, contact], (err, results) => {
    if (err) {
      console.error('Error inserting farmer:', err);
      return res.status(500).send('Error adding farmer');
    }
    res.status(201).send('Farmer added successfully!');
  });
});
// Get all farmers
app.get('/farmers', (req, res) => {
  const query = 'SELECT * FROM farmers';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching farmers:', err);
      return res.status(500).send('Error fetching farmers');
    }
    res.json(results);
  });
});
// Update a farmer
app.put('/farmers/:id', (req, res) => {
  const { id } = req.params;
  const { name, location, contact } = req.body;
  const query = 'UPDATE farmers SET name = ?, location = ?, contact = ? WHERE id = ?';
  
  db.query(query, [name, location, contact, id], (err, results) => {
    if (err) {
      console.error('Error updating farmer:', err);
      return res.status(500).send('Error updating farmer');
    }
    res.send('Farmer updated successfully!');
  });
});
// Delete a farmer
app.delete('/farmers/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM farmers WHERE id = ?';
  
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting farmer:', err);
      return res.status(500).send('Error deleting farmer');
    }
    res.send('Farmer deleted successfully!');
  });
});
