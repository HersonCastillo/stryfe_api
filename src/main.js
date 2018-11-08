const path = require('path');
const jwt = require('express-jwt');
const express = require('express');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');
const token = require('./app/utils/api.sql').tokenKey;
require('./app/utils/passport');
const app = express();
const auth = require('./app/routes/auth');
const api = require('./app/routes/api.index');
const public = require('./app/routes/public.index');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mailer = require('express-mailer');
const cron = require('node-cron');
const sha256 = require('sha256');
const PythonShell = require('python-shell').PythonShell;
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
app.use('/public', public);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') return res.status(403).send({
        error: 'Llave de acceso no permitida.'
    });
});

app.get('/image/:image', (req, res) => {
    res.sendFile(path.join(__dirname, `../disk/images/${req.params.image}`));
});
app.post('/validar', (req, res) => {
    app.mailer.send('email/accountcreate', {
        to: req.body.correo,
        subject: "Recuperación de contraseña",
        url: `http://localhost:3500/public/validate/${sha256(req.body.correo)}`
    }, (err) => {
        if(err) res.json({
            error: "No se pudo enviar el correo de validación.",
            code: err
        });
        else res.send({
            success: "Se envió un correo de validación. Verifica tu correo electrónico"
        });
    });
});
app.post('/recuperar', (req, res, next) => {
    app.mailer.send('email/getaccount', {
        to: req.body.correo,
        subject: "Recuperación de contraseña",
        url: `http://localhost:4200/recuperar/${sha256(req.body.correo)}`
    }, (err) => {
        if(err) res.json({
            error: "No se pudo enviar el correo de recuperación",
            code: err
        });
        else res.send({
            success: "Se envió un correo de recuperación. Verifica tu correo electrónico"
        });
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

io.on('connection', (socket) => {
    io.on('mensaje', (data) => {
        socket.send('mensaje', data);
    });
});

http.listen(port, () => console.log(`Contectado [:${port}]`));