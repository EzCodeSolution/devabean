const models = require('../../../models')
const log = require('log-beautify')
const queryHelper = require('../../../helper/query')
const codeStatus = require('../../../helper/StatusProduct.json')


const postNewType = async(req,res) => {
    const data = req.body;
    var newType = {
        Name : data.Name
    }

    models.ProductType.create(newType).then(rs => {
        res.status(201).json({
            message:"Create ProductTypeSuccess",
            productType: rs
        })
    })
}

const getaddproduct = async (req,res) => {
    var Type = await queryHelper.getType();
    res.render('admin/addproduct',{ProductType : Type})
}

const postaddproduct = async(req,res) => {
    const data = req.body;
    var IntProductType = parseInt(data.Category);
    console.log(codeStatus.wait)
    const product = {
        ProductType: IntProductType,   
        Name: data.Name,
        Subname: data.SubName,
        DataJson: "",
        Price: parseFloat(data.Price),
        Discount:  0,
        Description: data.Description,
        IsActive: true,
        Status: codeStatus.wait,
    }

    models.product.create(product).then(rs => {
        var a = req.files
        a.forEach(async x => {
            var ProductImage = {
                ProductId : rs.id,
                Image:x.filename
            }
            await models.ProductImage.create(ProductImage).then(rs => {
                console.log(rs)
            });
        });
        res.redirect('/admin/manageproduct')
    })

}

const addNewProduct = async(req,res) => {
    
}

module.exports =  {
    addNewProduct : addNewProduct,
    getaddproduct : getaddproduct,
    postaddproduct : postaddproduct,
    postNewType : postNewType
}