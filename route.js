var express = require('express');
var router = express.Router();
var hellomod2 = require('./controllers/hellomode2')

router.get('/', hellomod2.helloModule);

module.exports = router;