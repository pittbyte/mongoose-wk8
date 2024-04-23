//import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!


//Create a schema and model
const fruitSchema = new mongoose.Schema({
  name: String
});

const Fruit  = mongoose.model('Fruit', fruitSchema);

//next add a new fruit and display it
const apple = new Fruit({ name: 'apple'});
console.log(apple.name); //'apple'
});
