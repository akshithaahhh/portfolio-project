const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

const projects = [
  { name: "Portfolio Website" },
  { name: "Car Frame Startup" }
];

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});