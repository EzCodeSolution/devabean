const model = require('../models')


const getType = async() => {
    var productType = await model.ProductType.findAll();
    return productType
}

const getTypeById = async(id) => {
    var productType = await model.ProductType.findByPk(id);
    return productType
}

const getProduct = async() => {
    var product = await model.product.findAll();
    return product
}

module.exports = {
    getType : getType,
    getTypeById : getTypeById,
    getProduct : getProduct
}