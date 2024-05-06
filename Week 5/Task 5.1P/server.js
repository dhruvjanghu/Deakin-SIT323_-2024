// Import express module
const express = require('express');
// Create an express application
const app = express();
// Define the port to listen on
const port = 3000;

// Define a default route
app.get('/', (req, res) => {
  res.send('Calculator Microservice is up and running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
