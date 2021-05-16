const models = require('../../../models')
const log = require('log-beautify')
const queryHelper = require('../../../helper/query')
const codeStatus = require('../../../helper/StatusProduct.json')


const postNewStock = async(req,res) => {


    var data = req.body;
    if(data.Stock == ''){
        console.log('work')
    }
    var ctext = false;
    if(data.stockid == ''){
        ctext = true
    }
    if(ctext){
        var stock =  {
            ProductId : parseInt(data.productid),
            Count : parseInt(data.Stock)
        }
        await models.ProductStock.create(stock).then(async rs => {
            if(data.Stock > 0){
                var productupdate = {
                    Status : codeStatus.instock
                }
                await models.product.update(productupdate,{where:{id:parseInt(data.productid)}})
            } else{
                var productupdate = {
                    Status : codeStatus.outsotck
                }
                await models.product.update(productupdate,{where:{id:parseInt(data.productid)}})
            }
            res.redirect('/admin/manageproduct')
        })
    }else{
        var stock =  {
            Count : parseInt(data.Stock)
        }
        await models.ProductStock.update(stock,{where:{id:parseInt(data.stockid)}}).then(async rs => {
            if(data.Stock > 0){
                var productupdate = {
                    Status : codeStatus.instock
                }
                await models.product.update(productupdate,{where:{id:parseInt(data.productid)}})
            } else{
                var productupdate = {
                    Status : codeStatus.outsotck
                }
                await models.product.update(productupdate,{where:{id:parseInt(data.productid)}})
            }
            res.redirect('/admin/manageproduct')
        })
        
    }
} 

module.exports = {
    postNewStock:postNewStock
}