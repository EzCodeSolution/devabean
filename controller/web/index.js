const getHome = (req,res) => {
    res.render("web/index")
}

const getProduct = (req,res) => {
    res.render("web/product")
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


module.exports = {
    getHome:getHome,
    getViewblog:getViewblog,
    getBlog:getBlog,
    getCart:getCart,
    getWishlist:getWishlist,
    getViewproduct:getViewproduct,
    getProduct:getProduct
}