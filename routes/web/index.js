const express = require('express')
const router = express.Router()
const WebController = require('../../controller/web/index.controller')
const AuthController = require('../../controller/web/user/auth.controller')

router.get("/",WebController.getHome);
router.get("/cart",WebController.getCart);
router.get("/product",WebController.getProduct);
router.get("/viewproduct",WebController.getViewproduct);
router.get("/blog",WebController.getBlog);
router.get("/viewblog",WebController.getViewblog);
router.get("/wishlist",WebController.getWishlist);
router.get('/auth',WebController.getLogin)

//auth 
router.post('/register',AuthController.postRegister)

module.exports = router;