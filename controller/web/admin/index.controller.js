const models = require('../../../models')
const passport = require('passport')
const queryHelper = require('../../../helper/query')



async function getImageProduct(productId){
    const image = await models.productimage.find({where:{ProductId:this.productId,IsActive:true}})
    return image
}

const getIndex = async(req,res) => { 
    const messages = await req.consumeFlash('info');
    res.render('admin/index',{messages:messages})
}

const getManageProduct = async(req,res) =>{
    var product = await queryHelper.getProduct();
    res.render('admin/manageproduct',{product:product})
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

const getlogout = async(req,res) => {
    req.logout();
    res.redirect("/admin/login")
}

const getStock = async(req,res) => {
    var data = req.body;
    var id = parseInt(data.id);
    var stock = await queryHelper.getStockByProductId(id);
    var product = await queryHelper.getProductById(id);
    var ss
    if(stock == null){
        ss = {
            id : '',
            Count :0,
        }
    }else{
        ss = {
            id : stock.id,
            Count : stock.Count,
        }
    }
    res.render('admin/stock',{stock:ss,product:product,error: req.flash('error')})
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
    getlogin : getlogin,
    getlogout : getlogout,
    getStock : getStock
}