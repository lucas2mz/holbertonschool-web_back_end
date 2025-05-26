import http from 'http';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  const port = 1245;
  app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
  });
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

module.exports = app;
