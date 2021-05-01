const express = require('express');
const route = express.Router();
const authController = require('../../controller/api/auth.controller');
const userController = require('../../controller/api/user.controller')
//inclue middleware 
const checkAuth = require('../../middleware/check-auth')

// auth 
route.post('/auth/register',authController.postRegister);
route.post('/auth/login', authController.postLogin);
// route.post('/auth/logout', authController.postLogout);
// user 

route.get('/user/profile', checkAuth.checkAuth, userController.getProfile);
route.post('/user/profile', checkAuth.checkAuth, userController.postUpdateProfile);

module.exports = route;