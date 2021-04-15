//DEPENDENCIES
const express = require ('express');
const app = express();
const drinks = require('./models/drinks.js');
console.log(drinks);

//PORT
const port = 3000;

//ROUTES
// app.get('/', (req,res) =>{
//     res.send('Welcome to the Github App!');
//   });

app.get('/drinks/', (req,res) =>{
  res.send(drinks);
})

// LISTENER
app.listen(port, ()=> {
    console.log('This is running on port: ', port);
  })