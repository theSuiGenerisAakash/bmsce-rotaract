const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const app = express();

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);


//API file for interacting with MongoDB
const nimda = require('./app/routes/nimda');

app.use('/nimda', nimda);

//Set port
const port = process.env.PORT || '23495';
app.set('port', port);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));

//DIST output folder
app.use(express.static(path.join(__dirname,'dist')));

//set static files folder
app.use(express.static(path.join(__dirname, '/public')));
//app.use(express.static(path.join(__dirname, '/app/static')));
nimda.statics(app, express);

var server = http.createServer(app);

app.get('/gallery', function(req, res) {
    res.render('pages/gallery');
});

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/*', function(req, res){
	res.redirect('/');
})


/*// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
 */
server.listen(port, 'localhost');
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});

module.exports = app;

