const model = require('../models') 

async function auth(req, res, next) {

    if(req.isAuthenticated()) {
        const user = await model.Account.findByPk(req.user.id)

        console.log(user.Atype)
        if(user.Atype < 3){
            req.logout()
            await req.flash('message', "มีบางอย่างผิดพลาด")
            return res.redirect('/admin/login')
        }
        console.log(req.user)
        return next()
    }
    return res.redirect('/admin/login')
}

module.exports = auth