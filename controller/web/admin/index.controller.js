const models = require('../../../models')
const passport = require('passport')


async function getImageProduct(productId){
    const image = await models.productimage.find({where:{ProductId:this.productId,IsActive:true}})
    return image
}

const getIndex = (req,res) => { 
    res.render('admin/index')
}

const getManageProduct = async(req,res) =>{
    const data = await models.product.findAll();
    res.render('admin/manageproduct',{data:data})
}

const getOrderPage = (req,res) => {
    res.render('admin/order')
}

const getConfigWeb  = (req,res) => {
    res.render('admin/configweb')
}

const getHistory = (req,res) => {
    res.render('admin/history')
}

const getPromotion = (req,res) => {
    res.render('admin/promotion')
}

const getUserconfig = (req,res) => {
    res.render('admin/userconfig')
}

const getAdmiconfig = (req,res) =>{
    res.render('admin/adminconfig')
}

const getlogin = async(req,res) => {
    req.logout()
    const messages = await req.consumeFlash('message');
    res.render('admin/login',{message:messages,success:true})
}


module.exports = {
    getIndex:getIndex,
    getManageProduct:getManageProduct,
    getOrderPage : getOrderPage,
    getConfigWeb : getConfigWeb,
    getHistory : getHistory,
    getPromotion : getPromotion,
    getUserconfig : getUserconfig,
    getAdmiconfig : getAdmiconfig,
    getlogin : getlogin
}