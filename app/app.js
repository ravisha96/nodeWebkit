var express = require('express'),
  	path = require('path'),
  	cookieParser = require('cookie-parser'),
  	mongo = require('mongodb'),
  	bodyParser = require('body-parser'),
  	routes = require('./routes'),
	  app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', routes.index);
  app.post('/login', routes.login);

  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function() {
  	// log a message to console!
  });

  /**
   * socket initialize the custom socket.io plugin
   * @type {RegExp}
   */
  var socket = require('./modules/socket-io');
  new socket(server);

  module.exports = app;
