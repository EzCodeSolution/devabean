const models = require('../../models')
const jwt = require('jsonwebtoken')
const helper = require('../../helper/savelog')
const bcryptjs = require('bcryptjs')

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
    try{
        models.Account.update(updateData,{where : {id:req.userData.userId}}).then(async rs => {
            const user = await models.Account.findByPk(req.userData.userId)
            helper.savelog(req.userData.userId,"12")
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

const postUpdatePassword =  async (req,res) =>{
    const data = req.body;
    var user = await models.Account.findByPk(req.userData.userId);
    bcryptjs.compare(data.oldpassword,user.Password, function(err, result){
        if(result){
            if(data.password != data.comfirmpassword){
                return res.status(200).json({message:"รหัสผ่านใหม่ไม่ตรงกัน",error:err,success:false})
            }else{
                var newPassword = {
                    Password:data.password
                }
                models.Account.update(newPassword,{where:{id:req.userData.userId}}).then(rs => {
                    helper.savelog(req.userData.userId,"13")
                    res.status(200).json({message:"เปลี่ยนรหัสผ่านสำเร็จ",success:true})
                })
            }
        }else{
            res.status(200).json({message:"รหัสผ่านเก่าผิด",error:err,success:false})
        }
    });
}

module.exports = {
    getProfile : getProfile,
    postUpdateProfile : postUpdateProfile,
    postUpdatePassword : postUpdatePassword
}