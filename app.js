const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Jenkins CI/CD Working Successfully!');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
