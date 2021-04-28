const express = require('express')
const router = express.Router()
const WebController = require('../../controller/web/index')

router.get("/",WebController.getHome);
router.get("/cart",WebController.getCart);
router.get("/product",WebController.getProduct);
router.get("/viewproduct",WebController.getViewproduct);
router.get("/blog",WebController.getBlog);
router.get("/viewblog",WebController.getViewblog);
router.get("/wishlist",WebController.getWishlist);


module.exports = router;