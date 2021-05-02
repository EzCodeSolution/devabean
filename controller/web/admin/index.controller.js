const getIndex = (req,res) => {
    res.render('admin/index')
}

const getManageProduct = (req,res) =>{
    res.render('admin/manageproduct')
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
module.exports = {
    getIndex:getIndex,
    getManageProduct:getManageProduct,
    getOrderPage : getOrderPage,
    getConfigWeb : getConfigWeb,
    getHistory : getHistory,
    getPromotion : getPromotion,
    getUserconfig : getUserconfig,
    getAdmiconfig : getAdmiconfig
}