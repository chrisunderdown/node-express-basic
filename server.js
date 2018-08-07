var express = require('express');
var exphbs = require('express-handlebars');
var request = require('request');


var app = express();


app.use(express.static('assets'));


app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: ['views/partials/']
}));


app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.render('home');
});


app.listen(process.env.PORT || 8000 , function () {
  console.log('-------------------------------');
  console.log('Node Express Basic is running on port 8000');
  console.log('-------------------------------');
});
