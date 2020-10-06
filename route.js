var express = require('express');
var router = express.Router();
var hellomod1 = require('./controllers/hellomode2')

router.get('/', hellomod2.helloModule);

module.exports = router;