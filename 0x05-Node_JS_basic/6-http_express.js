const express = require('express'); // express is a module in Nodejs

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
