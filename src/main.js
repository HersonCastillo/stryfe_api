var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var passport = require('passport');
require('./app/utils/passport');

var auth = require('./app/routes/auth');
var api = require('./app/routes/usuario');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3500;

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST,PUT,DELETE,OPTIONS,PURGE,GET");
    next();
});

app.use('/auth', auth);
app.use('/api/v1', passport.authenticate('jwt', { session: false }), api);

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

io.on('connection', (socket) => {
    //start real time with [socket]...
});

http.listen(port, () => console.log('Contectado...'));