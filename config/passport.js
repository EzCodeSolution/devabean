const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const bcrypt = require('bcrypt')
const log = require('log-beautify')

function init(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        // Login
        // check if email exists
        const user = await models.Account.findOne({where:{Email:email}})
        if(!user) {
            return done(null, false, { message: 'อีเมลล์หรือรหัสผ่านผิด' })
        }

        bcrypt.compare(password, user.Password).then(match => {
            if(match) {
                return done(null, user, { message: 'เข้าสู่ระบบสำเร็จ' })
            }
            return done(null, false, { message: 'อีเมลล์หรือรหัสผ่านผิด' })
        }).catch(err => {
            log.error(err)
            return done(null, false, { message: 'เกิดข้อผิดพลาด'})
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser(async(id, done) => {
        var a = await models.Account.findByPk(id.id);
        var aa = {
            id:a.id,
            email:a.Email,
            displayname:a.DisplayName
        }
        done(null,aa)
        
    })
}

module.exports = init