var express = require('express');
var router = express.Router();

router.get('/example', (req, res) => {
	res.send('Hola Mundo!');
});

module.exports = router;