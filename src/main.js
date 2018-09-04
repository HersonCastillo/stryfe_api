var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var api = require('./routes.js');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 80;

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST,PUT,DELETE,OPTIONS,PURGE,GET");
    next();
});

app.use('/api/v1', api);

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

http.listen(port, () => console.log(port));