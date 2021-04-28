const express = require('express')
const router = express.Router()
const WebController = require('../../controller/web/index')

router.get("/",WebController.getHome);

module.exports = router;