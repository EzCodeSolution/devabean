const models = require('../../../models')
const log = require('log-beautify')

const getaddproduct = async (req,res) => {
    res.render('admin/addproduct')
}

const postaddproduct = async(req,res) => {
    const data = req.body;
    console.log(req.files)
}
const addNewProduct = async(req,res) => {
    
}

module.exports =  {
    addNewProduct : addNewProduct,
    getaddproduct : getaddproduct,
    postaddproduct : postaddproduct
}