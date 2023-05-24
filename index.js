const express = require('express');
const app = express();

// Define routes and middleware here

// Start the server
const port = 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Replace the file path as needed
  });