const express = require('express');
const route = express.Router();
const authController = require('../../controller/api/auth.controller');


route.post('/auth/register',authController.postRegister);
route.post('/auth/login', authController.postLogin);

module.exports = route;