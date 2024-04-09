//importing the express module to create a web server
const express = require('express');
const app = express(); // starting a new express application 
const port = 3000; // have set a port number 
// in this port number the server will listen 

//////////-----------------addition------------------////////////

// defining a route handler (for addition)
app.get('/add', (req, res) => {
    // using try catch for effective error handling 
    try {
        
      // the user will decide the 2 numbers to add here
      const num1 = parseFloat(req.query.num1);
      const num2 = parseFloat(req.query.num2);

      // this will validate both parameters as numbers 
      // so lets say if num1 value entered by the user is a string then it will show an error of invalid input numbers 
      if (isNaN(num1) || isNaN(num2)) {
        // it will throw an error right here 
        throw new Error('Invalid input numbers');
      }
      
      // calculating the addition of num1 and num2 
      const result = num1 + num2;
      //sending the result back to client
      res.send(`The result of addition is ${result}`);
    } catch (err) {
      res.status(400).send(err.message); // catching any kind of error and sending an error response 
    }
  });


/////////-------------subtraction--------------///////////////

// defining a route for subtraction (for a particular URL that will be for subtraction )
app.get('/subtract', (req, res) => {
    try { // try block to catch any errors 
        // asking the user to add the numbers he want to subract in the URL 
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);
        
        // this will validate both parameters as numbers just like addition 
        if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Invalid input numbers');
      }
      
      // subtracting num2 from num1
      const result = num1 - num2;
      // sending the result back to the user 
      res.send(`The result of subtraction is ${result}`);
    } catch (err) { 
        // throw any error if we get any
      res.status(400).send(err.message);
    }
  });


  /////////////---------------multiplication---------------/////////////

//defining a route for Multiplication (for a particular URL that will be for multiplication )
app.get('/multiply', (req, res) => { 
    // using try and catch to deal with any errors
  try {
    // num1 and num2 from the URL 
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    // this will validate both parameters as numbers just like addition and subtraction 
    if (isNaN(num1) || isNaN(num2)) {
        // it will throw an error right here if the num1 and num2 aren't numbers 
      throw new Error('Invalid input numbers');
    }

    // multipling both num1 and num2 
    const result = num1 * num2;
    // sending the results back to the client 
    res.send(`The result of multiplication is ${result}`);
  } catch (err) {
    // if any error comes the message will be shown 
    res.status(400).send(err.message);
  }
});

///////////////-----------Division------------------------//////////////

// Everything is same as other like addition 
app.get('/divide', (req, res) => {
  try {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // there can be 2 errors that can come in division, 1 the usual invalid numbers and the other
    // one being cannot divide by zero 
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Invalid input numbers');
    }
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
    
    // division operation 
    const result = num1 / num2;
    res.send(`The result of division is ${result}`);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// this will start listening for incoming requests on specified port 
app.listen(port, () => {
    // once the server starts this message will be shown (indicating that it is listening for requests)
    console.log(`Calculator service listening at http://localhost:${port}`);
  });
