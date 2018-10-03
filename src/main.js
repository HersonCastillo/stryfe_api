var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./app/utils/passport');

var auth = require('./app/routes/auth');
var api = require('./app/routes/index');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mailer = require('express-mailer');
var port = 3500;

mailer.extend(app, {
    from: 'no-reply@stryfe.com',
    host: 'smtp.gmail.com',
    secureConnection: true,
    port: 465,
    transportMethod: 'SMTP',
    auth: {
        user: 'stryfecompany@gmail.com',
        pass: 'ABC12345#'
    }
});

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');
app.use('/auth', auth);
app.use('/api/v1', passport.authenticate('jwt', { session: false }), api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

io.on('connection', (socket) => {
    //start real time with [socket]...
});

http.listen(port, () => console.log(`Contectado [::${port}]`));