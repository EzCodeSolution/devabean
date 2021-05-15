const express = require('express')
const router = express.Router()
const authController = require('../../../controller/web/admin/auth.controller')


router.post('/auth/login',authController.postLogin)



module.exports = router