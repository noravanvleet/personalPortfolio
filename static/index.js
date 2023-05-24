console.log("Hello World!");
const express = require('express');
const app = express();

// Define routes and middleware here

// Start the server
const port = 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
//   });