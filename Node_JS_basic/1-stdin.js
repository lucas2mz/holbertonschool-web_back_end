process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  const message = `Your name is: ${name}\n`;

  process.stdout.write(message);

  process.stdout.write('This important software is now closing\n');
  process.exit();
});
