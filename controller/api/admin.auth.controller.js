const models = require('../../models')
const bcryptjs = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../../helper/savelog');

const postLogin = (req,res) => {
    models.Account.findOne({where:{Email:req.body.email,Atype:3}}).then(rs => {
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
                    },'adminallowyouplayheare',function(err, token){
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

const postLogout = (req,res) => {
    
}

module.exports = {
    postLogin:postLogin
}