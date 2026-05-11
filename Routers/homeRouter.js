const express = require('express');
const { HomeResponse, AboutResponse, ContactResponse } = require('../controller/homecontroler');
const router = express.Router();

router.get('/', HomeResponse)

router.get('/home', HomeResponse)

router.get('/about', AboutResponse )

router.get('/contact', ContactResponse)

module.exports = router;
