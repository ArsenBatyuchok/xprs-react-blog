var express = require('express');
var path = require('path');

var app = express();

var routes = require('./routes/index');

app.use('/', routes);

// port setup
app.set('port', process.env.PORT || 9080);

// TODO: serves static files DELETE IN PRODUCTION
if (process.argv[2] == 'dev') {
	app.use(express.static(path.join(__dirname)));
}

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//  server
var server = app.listen(app.get('port'), function () {
	console.log('App started');
});