//DEPENDENCIES
const express = require ('express');
const app = express();

//PORT
const port = 3000;

//ROUTES
app.get('/', (req,res) =>{
    res.send('Welcome to the Github App!');
  });

// LISTENER
app.listen(port, ()=> {
    console.log('This is running on port: ', port);
  })