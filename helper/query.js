const model = require('../models')

//Product Type
const getType = async() => {
    var productType = await model.ProductType.findAll();
    return productType
}
const getTypeById = async(id) => {
    var productType = await model.ProductType.findByPk(id);
    return productType
}
//Product
const getProduct = async() => {
    var product = await model.product.findAll();
    return product
}
const getProductById = async(ProductId) => {
    const Product = await model.product.findByPk(ProductId);
    return Product
}
//Product Stock
const getStock = async() =>{
    var stock = await model.ProductStock.findAll();
    return stock
}
const getStockById = async(id) =>{
    var stock = await model.ProductStock.findByPk(id);
    return stock
}
const getStockByProductId = async(ProductId) => {
    var stock = await model.ProductStock.findOne({where:{ProductId:ProductId}});
    return stock
}

module.exports = {
    getType : getType,
    getTypeById : getTypeById,
    getProduct : getProduct,
    getProductById : getProductById,
    getStock : getStock,
    getStockById : getStockById,
    getStockByProductId : getStockByProductId
}