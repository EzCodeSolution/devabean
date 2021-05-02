const express = require('express');
const route = express.Router();
//inclue middleware 
const checkAuth = require('../../../middleware/checkadmin-auth')
const controller = require('../../../controller/api/admin.auth.controller')

route.post("/auth/login",controller.postLogin)

module.exports = route