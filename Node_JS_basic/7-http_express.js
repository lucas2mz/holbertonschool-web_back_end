const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(database);
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

const server = app.listen(port);
module.exports = server;
