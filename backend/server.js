const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Serve manuals (PDFs) statically
app.use('/manuals', express.static('mannuals'));

// serve html pages
app.use(express.static('frontend/static'));


// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pasta@098',
  database: 'nhpc_manuals'
});

// Check DB connection
db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to DB');
});

// API 1: Get list of categories
app.get('/api/categories', (req, res) => {
  db.query('SELECT * FROM main_category', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// API 2: Get number of files for a category
app.get('/api/category/:id/count', (req, res) => {
  console.log(req.params.id);
  db.query('SELECT COUNT(*) AS file_count FROM manuals WHERE category_id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// API 3: Get list of manual files in a category
app.get('/api/category/:id/manuals', (req, res) => {
  db.query('SELECT file_name, file_location FROM manuals WHERE category_id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
