//DEPENDENCIES
const express = require ('express');
const app = express();
const drinks = require('./models/drinks.js');
const food = require('./models/food.js')
console.log(drinks);
console.log(food);
app.use('/public', express.static('public'));
//PORT
const port = 3000;

//ROUTES
// app.get('/', (req,res) =>{
//     res.send('Welcome to the Github App!');
//   });

// app.get('/drinks/', (req,res) =>{
//   res.send(drinks);
// })

//Index EJS route
app.get('/drinks/', (req,res) =>{
  res.render('index.ejs', {
    allDrinks: drinks, 
    allFood: food
  });
})

// Show EJS route
app.get('/drinks/:id', (req,res) =>{
  res.render('show.ejs', {
    drink: drinks[req.params.id],
  })
});

app.get('/food/:id', (req,res) =>{
  res.render('showFood.ejs', {
    foods: food[req.params.id]
  })
});

// LISTENER
app.listen(port, ()=> {
    console.log('This is running on port: ', port);
  })