const passport = require('passport')
const models = require('../../../models')
const log = require('log-beautify')
const bcrypt = require('bcrypt')



const postLogin = async(req,res,next) => {
    const {email,password} = req.body;
    if(!email || !password){
        await req.flash('message', "กรุณากรอกอีเมลล์และรหัสผ่าน")
        return res.redirect('/admin/login');
    }
    passport.authenticate('local',async(err,user,info)=>{
        if(err){
            await req.flash("message", `${info.message}`)
            return next(err)
        }
        const newUser = {
            _id:user.id,
            Username:user.DisplayName,
            Email:user.Email
        }
        if(!user){
            req.flash('message',info.message)
            return res.redirect('/admin/login');
        }
        req.logIn(user,async(err)=>{
            if(err){
                return next(err)
            }
            log.success("User has SignIn")
            await req.flash('info', "เข้าสู่ระบบสำเร็จ")
            return res.redirect('/admin/')
        })
        
    })(req, res, next)
}

const postRegister = async(req,res) =>{
    const data = req.body;
    if(data.password != data.ConfirmPassword){
        console.log("password don't same")
        req.flash('error', "รหัสผ่านไม่ตรงกัน")
        req.flash('code', "register")
        req.flash("data",data)
        return res.redirect('/auth')
    }
    var checkEmail = await models.Account.findOne({where:{email:data.Email}})
    if(checkEmail){
        req.flash('error', "มีผู้ใช้งานอีเมลล์นี้แล้ว")
        req.flash('code', "register")
        return res.redirect('/')
    }
    const hashPassword = await bcrypt.hash(data.Password, 10)
    var register = {
        Username: data.Username,
        Email: data.Email,
        Password: hashPassword,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Tel: data.Tel,
        Line: data.Line
    }

    console.log(register)
    return res.redirect('/')
    // {
    //     Name : ""
    //     Email : ""
    //     Password : ""
    //     FirstName : ""
    //     LastName : ""
    //     Address : {
    //     }
    //     Tel : ""
    //     Line : ""
    //     Atype : 0
    //     GoogleAuth : ""
    //     FacebookAuth : ""
    // }
    
}



module.exports = {
    postLogin : postLogin,
    postRegister : postRegister
}
