const models = require('../../models')
const bcryptjs = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../../helper/savelog');

const postRegister = (req,res) => {
    if(req.body.password != req.body.confirmpassword){
        return res.status(200).json({
            message:"รหัสผ่านไม่ตรงกัน",
            success: false
        })
    }
    models.Account.findOne({where:{Email:req.body.email}}).then(rs =>{
        if(rs){
            return res.status(200).json({
                message:"มีผู้ใช้งานนี้แล้ว",
                success:false
            });
        }else{
            bcryptjs.genSalt(10,function(err,salt){
                bcryptjs.hash(req.body.password, salt, function(err,hash){
                    const user = {
                        DisplayName: req.body.username,
                        Email: req.body.email,
                        Password : hash,
                        FirstName : req.body.firstname,
                        LastName : req.body.lastname,
                        Tel : req.body.tel,
                        Line : req.body.lineId,
                        IsActive : true,
                        Atype : 0
                    }
        
                    models.Account.create(user).then(result => {
                        helper.savelog(result.id,"10")
                        res.status(201).json({
                            message:"สร้างบัญชีผู้ใช้สำเร็จ",
                            success : true,
                        })
                    }).catch(error =>{
                        res.status(500).json({
                            message:"มีบางอย่างผิดพลาด กรุณาลองใหม่",
                            error:  error
                        })
                    });
                });
            });
        }
    }).catch(err => {
        res.status(200).json({
            message:"มีบางอย่างผิดพลาด กรุณาลองใหม่",
            error:err,
            success : false,
        })
    });
}

const postLogin = (req,res) => {
    models.Account.findOne({where:{Email:req.body.email}}).then(rs => {
        if(rs === null){
            res.status(401).json({
                message: "เข้าสู่ระบบไม่สำเร็จ มีบางอย่างผิดพลาด",
                success:false
            })
        }else{
            bcryptjs.compare(req.body.password,rs.Password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email:rs.email,
                        userId:rs.id
                    },'gotnotallowtoplayhere',function(err, token){
                        helper.savelog(rs.id,"0")
                        res.status(201).json({
                            message:"เข้าสู่ระบบสำเร็จ",
                            token: token,
                            success:true,
                        })
                    });
                }else{
                    res.status(200).json({message:"อีเมลล์หรือรหัสผ่านผิด",error:err,success:false})
                }
            });
        }
    }).catch(err => {
        res.send(500).json({message:"มีบางอย่างผิดพลาด",error:err})
    });
}

module.exports = {
    postRegister:postRegister,
    postLogin:postLogin
}