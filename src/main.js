const path = require('path');
const jwt = require('express-jwt');
const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const token = require('./app/utils/api.sql').tokenKey;
require('./app/utils/passport');
const app = express();
const auth = require('./app/routes/auth');
const api = require('./app/routes/index');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mailer = require('express-mailer');
const port = 3500;

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

app.use(multipart());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/auth', auth);
app.use('/api/v1', jwt({ secret: token }), api);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') return res.status(403).send({
        error: 'Llave de acceso no permitida.'
    });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/index.html')));

io.on('connection', (socket) => { });

http.listen(port, () => console.log(`Contectado [:${port}]`));