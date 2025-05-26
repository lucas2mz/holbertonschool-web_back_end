const http = require('http');
const process = require('process');
const fs = require('fs');

const countStudents = require('./3-read_file_async');

const DB_PATH = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(DB_PATH)
      .then(() => {
        fs.readFile(DB_PATH, 'utf8', (err, data) => {
          if (err) {
            res.end('Cannot load the database');
            return;
          }

          const lines = data.split('\n').filter((line) => line.trim() !== '');

          const headers = lines.shift().split(',');

          const firstNameIdx = headers.indexOf('firstname');

          const fieldIdx = headers.indexOf('field');
          const studentsByField = {};

          for (const line of lines) {
            const row = line.split(',');
            if (row.length === headers.length) {
              const firstname = row[firstNameIdx];
              const field = row[fieldIdx];

              if (!studentsByField[field]) {
                studentsByField[field] = [];
              }
              studentsByField[field].push(firstname);
            }
          }

          const totalStudents = Object.values(studentsByField)
            .reduce((acc, list) => acc + list.length, 0);

          res.write(`Number of students: ${totalStudents}\n`);
          for (const [field, students] of Object.entries(studentsByField)) {
            res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
          }
          res.end();
        });
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);
module.exports = app;
