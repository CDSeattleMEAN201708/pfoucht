const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basic_mongoose');
var AnimalSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  type: {type: String, required: true, minlength: 3},
  created_at: {type: Date, default: Date.now}
})
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model('Animal');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const port = 8000;
// Routes
app.get('/', function(req, res){
  Animal.find({}, function(err, animals){
    if (err) {
      console.log(err);
    }
    res.render("index", {animals: animals})
  })
})

app.get('/mongooses/new', function(req, res){
  res.render("newMongoose")
})

app.post('/mongooses', function(req, res){
  Animal.create(req.body, function(err){
    if (err){
      console.log(err);
    }
    res.redirect('/')
  })
})

app.get("/mongooses/:id", function(req, res){
  Animal.find({_id: req.params.id}, function(err, animal){
    if (err) {
      console.log(err);
      res.redirect('/')
    } else {
      res.render("animalInfo", animal[0])
    }
  })
})

app.get("/mongooses/edit/:id", function(req,res){
  Animal.find({_id: req.params.id}, function(err, animal){
    if (err) {
      console.log(err);
      res.redirect('/')
    } else {
      console.log("****");
      console.log(animal);
      res.render("edit", animal[0])
    }
  })
})

app.get("/mongooses/destroy/:id", function(req, res){
  Animal.remove({_id: req.params.id}, function(err){
    if (err) {
      console.log(err);
    }
  })
  res.redirect('/')
})

app.listen(port, function(){
  console.log(`Listening to port ${port}`);
})
