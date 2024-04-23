const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!


//create schema
const kittySchema = new mongoose.Schema({
  name: String
});

//set a method and create a model  reffering to the method we created
kittySchema.methods.speak = function () {
  const greeting = this.name ? "Meow name is " + this.name : "I don't have a name"; //same as if/else statement 
  console.log(greeting);
}
const kitten = mongoose.model('Kitten', kittySchema);

const fluffy = new kitten({ name: 'fluffy' });
fluffy.speak(); //"Meow name is fluffy"
});
