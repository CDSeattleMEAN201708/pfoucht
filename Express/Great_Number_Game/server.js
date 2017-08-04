var express = require("express");
var session = require('express-session');
var path = require("path");
var app = express();
var bodyParser = require("body-parser");

app.use(session({secret: "codingdojorocks"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")))

app.set("views", path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  if (!req.session.randomNum){
    req.session.randomNum = Math.floor(Math.random() * 101 + 1)
    req.session.success = false;
    req.session.hint = ''
  }
  console.log(req.session.randomNum);
  console.log(req.session.success);
  console.log("hint is: " + req.session.hint);
  res.render('index', {data: req.session});
})

app.post('/process', function(req, res){
  console.log("ID is: " + req.body.id);
  console.log("random num is: " + req.session.randomNum);
  if (req.body.id == req.session.randomNum) {
    req.session.success = true;
    req.session.hint = "Correct guess!"
  } else if (req.session.randomNum > req.body.id) {
    req.session.hint = "Too low!"
  } else {
    req.session.hint = "Too High!"
  }
  res.redirect('/');
})

app.get('/reset', function(req, res){
  req.session.destroy();
  res.redirect('/')
})

app.listen(8000, function(){
  console.log("Listening to port 8000");
})
