const passport = require('passport')
const models = require('../../../models')
const log = require('log-beautify')



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
        req.logIn(user,(err)=>{
            if(err){
                return next(err)
            }
            log.success("User has SignIn")
            return res.redirect('/admin/')
        })
        
    })(req, res, next)
    // models.Account.findOne({where:{Email:email}}).then(rs =>{
    //     if(rs){
    //         console.log("find")
    //     }else{
    //         console.log("notfound")
    //     }
    // })
}

const postLogout = async(req,res,next) => {
    req.logout()
    log.success("User has SignOut")
    return res.redirect('/admin/login')  
}

module.exports = {
    postLogin : postLogin
}
