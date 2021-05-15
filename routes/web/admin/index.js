const express = require('express')
const router = express.Router()
const adminController = require('../../../controller/web/admin/index.controller')
const adminAuth = require('../../../middleware/checkadmin-auth')
const productController = require('../../../controller/web/admin/product.controller')
const imageUploader = require('../../../helper/saveimage');

router.get("/",adminAuth,adminController.getIndex)
router.get('/manageproduct',adminController.getManageProduct)
router.get('/order',adminController.getOrderPage)
router.get('/configweb',adminController.getConfigWeb)
router.get('/history',adminController.getHistory)
router.get('/promotion',adminController.getPromotion)
router.get('/userconfig',adminController.getUserconfig)
router.get('/adminconfig',adminController.getAdmiconfig)
router.get('/login',adminController.getlogin)
router.get('/logout',adminController.getlogout)

//product 
router.get('/addproduct',productController.getaddproduct)
router.post('/addproduct',imageUploader.upload.array('img', 12),productController.postaddproduct)
//product type
router.post('/createproductType',productController.postNewType)

module.exports = router