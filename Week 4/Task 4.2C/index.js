// Import express module
const express = require('express');
// Create an express application
const app = express();
// the port to listen on
const port = 3000;

// a default route
app.get('/', (req, res) => {
  res.send('calcutor microservice is runnning ( TASK 4.2C)');
});



///////////////-----------------------Exponential------------------////////////////

// Defining a route here for the exponetial arithemetic operations  (for a particular URL that will be for square root )
app.get('/power', (req, res) => {
    // try and catch block to catch errors
  try {
    // user will enter num1 and num2
    const base = parseFloat(req.query.num1);
    const exponent = parseFloat(req.query.num2);

    // if the user enter a string instead on a number then this error will be thrown 
    if (isNaN(base) || isNaN(exponent)) {
      throw new Error('Invalid input');
    }

    // calculating the exponential result
    const result = Math.pow(base, exponent);
    // sending the result back to client
    res.send(`the result of ${base} raised to the power of ${exponent} is ${result}`);
  } 
  catch (err) {
    // catch any kind of error that comes in as a part of error handling
    res.status(400).send(err.message);
  }
});



////////////---------------------Squareroot--------------------/////////////////

// just like exponential this will  defining a route for sqaureroot (for a particular URL that will be for sqaure root )
app.get('/sqrt', (req, res) => {
  try { // try catch block for error handling 
    // just one number this time because num1 will be entered and then the square root will be calculated
    const number = parseFloat(req.query.num1);

    // to throw an error if an invalid input is added 
    if (isNaN(number)) {
      throw new Error('Invalid input');
    }

    // just like that there cannot be a square root of a -ve number
    if (number < 0) {
      throw new Error('Cannot take the square root of a negative number');
    }

    // calculation for the sqaure root
    const result = Math.sqrt(number);
    // sending the result to the client 
    res.send(`The square root of ${number} is ${result}`);
  } 
  catch (err) {
    res.status(400).send(err.message);
  }
});

////////////--------------------Modulo-----------------////////////////

// just like exponential this will  defining a route for modulo (for a particular URL that will be for modulo )
app.get('/modulo', (req, res) => {
  try { // try and catch for better error handling like i mentioned above 
    
    // user will be entering 2 numbers 
    const dividend = parseFloat(req.query.num1);
    const divisor = parseFloat(req.query.num2);

    // throwing error in case of a invalid case ( have explained above)
    if (isNaN(dividend) || isNaN(divisor)) {
      throw new Error('Invalid input');
    }
    // same a dividing
    if (divisor === 0) {
      throw new Error('Cannot divide by zero');
    }
    // there will be more if statements if there are more invalid cases 

    // calculation for the modulo
    const result = dividend % divisor;
    // sending the result back to cleint like in above cases 
    res.send(`The remainder of ${dividend} divided by ${divisor} is ${result}`);
  } 
  catch (err) {
    // like above throw error if there is any 
    res.status(400).send(err.message);
  }
});

// starting the server
// and listening to the port (3000)
app.listen(port, () => {
  console.log(`Calculator microservice listening at http://localhost:${port}`);
});
