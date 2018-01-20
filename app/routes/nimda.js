const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const logger = require('morgan');
const router =  express.Router();
const app = express();
const fs = require('fs');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static files folder -DOESN'T WORK
//console.log((path.join(__dirname, '../static')));
//app.use(express.static(path.join(__dirname, '../static')));

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/bmsce_rotaract', (err, db) => {
        if(err) return console.log(err);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

var key = '';

function createRandomString( length ) {
    var str = "";
    for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ) );
    key = str.substr( 0, length );
	return key;
}

router.post('/gallery_feed', function(req, res){
	
});

router.post('/', function(req, res){
	if(req.body.pwd != '1234')
		res.send('False');
	else
		{
			router.get('/'+ createRandomString(16), function(req, res){
			let html = fs.readFileSync(path.join(__dirname,'../static/feed.html'));
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
			});
			
			res.send(key);
			
		}
});

router.get('/', function( req, res){
	let html = fs.readFileSync(path.join(__dirname,'../static/login_nimda.html'));
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

module.exports = router;
module.exports.statics = function(app, express) {
	app.use(express.static(path.join(__dirname, '../static')));
}