const models = require('../../models')
const jwt = require('jsonwebtoken')
const helper = require('../../helper/savelog')

const getProfile = (req,res) => {   
    models.Account.findByPk(req.userData.userId).then(rs => {
        var profile = {
            DisplayName : rs.DisplayName,
            Email : rs.Email,
            Address : rs.Address,
            FirstName : rs.FirstName,
            LastName : rs.LastName,
            Tel : rs.Tel,
            Line : rs.Line,
            DataJson : rs.DataJson
        }
        helper.savelog(req.userData.userId,"11")
        res.status(200).json(profile)
    }).catch(e => {
        res.status(404)
    })
}

const postUpdateProfile = (req,res) =>{
    const data = req.body;
    var updateData = {
        Address: JSON.stringify(data.Address),
        DisplayName: data.DisplayName,
        Tel: data.Tel,
        Line: data.Line,
        FirstName: data.FirstName,
        LastName: data.LastName
    }
    console.log(data)
    try{
        models.Account.update(updateData,{where : {id:req.userData.userId}}).then(async rs => {
            const user = await models.Account.findByPk(req.userData.userId)
            res.status(201).json({data:user,success:true,message:"อัพเดทสำเร็จ"})
        }).catch(e => {
            console.log(e)
            res.status(200).json({success:false,message:"มีบางอย่างผิดพลาด กรุณาลองใหม่"})
        })
    }catch(e){
        console.log(e)
        res.status(500).json({success:false,message:"มีบางอย่างผิดพลาด กรุณาลองใหม่"})
    }

}

module.exports = {
    getProfile : getProfile,
    postUpdateProfile : postUpdateProfile
}