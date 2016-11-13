// Server

var express = require('express'),
bodyParser = require('body-parser'),
methodOR = require('method-override');

var app = express();

// public director for static content
app.use(express.static(process.cwd() + '/public'));

// set up body parser to handle url parsing
app.use(bodyParser.urlencoded({
  extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOR('_method'));

// handlebars for templating
var hb = require('express-handlebars');
app.engine('handlebars', hb({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Router ///////////////////////////////////////////////////////////////
var routes = require('./controllers/todo_controller.js');
app.use('/', routes);

// Server Ready ////////////////////////////////////////////////////////////
var port = process.env.PORT || 3000;
app.listen(port);
