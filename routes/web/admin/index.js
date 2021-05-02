const express = require('express')
const router = express.Router()
const adminController = require('../../../controller/web/admin/index.controller')
const route = require('../../api/user.route')

router.get("/",adminController.getIndex)
router.get('/manageproduct',adminController.getManageProduct)
router.get('/order',adminController.getOrderPage)
router.get('/configweb',adminController.getConfigWeb)
router.get('/history',adminController.getHistory)
router.get('/promotion',adminController.getPromotion)
router.get('/userconfig',adminController.getUserconfig)
router.get('/adminconfig',adminController.getAdmiconfig)
router.get('/login',adminController.getlogin)

module.exports = router