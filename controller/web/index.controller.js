const model = require('../../models')

const getHome = (req,res) => {
    res.render("web/index")
}

const getProduct = async(req,res) => {
    var product = await model.product.findAll();
    var data = await matchImgProduct(product)
    res.render("web/product",{data:data})
}

async function matchImgProduct (product) {
    var data = []
    for(var i = 0;i<product.length;i++){
        var img = await model.ProductImage.findOne({where:{ProductId:product[i].id}})
        console.log(img)
        var a = {
            product : product[i],
            img : img
        }
        data.push(a)
    }
    return data 
}


const getViewproduct = (req,res) => {
    res.render("web/viewproduct")
}

const getWishlist = (req,res) => {
    res.render("web/wishlist")
}

const getCart = (req,res) => {
    res.render("web/cart")
}

const getBlog = (req,res) => {
    res.render("web/blog")
}

const getViewblog = (req,res) => {
    res.render("web/viewblog")
}

const getLogin = (req,res) =>{
    res.render('web/auth')
}


module.exports = {
    getHome:getHome,
    getViewblog:getViewblog,
    getBlog:getBlog,
    getCart:getCart,
    getWishlist:getWishlist,
    getViewproduct:getViewproduct,
    getProduct:getProduct,
    getLogin:getLogin
}