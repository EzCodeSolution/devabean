const express = require("express");
const path = require("path")
const {flash} = require('express-flash-message');
const session = require('express-session');
const passport = require('passport')
const app = express();
const multer = require('multer');
var upload = multer();
//include route 
const web = require('./routes/web/index')
const admin = require('./routes/web/admin/index')
const adminApi = require('./routes/web/admin/adminApi')


app.use(
    session({
        secret: 'godnotallow',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
            },
        })
    );
app.use(flash({ sessionKeyName: 'flashMessage' }));
// Passport Config
const passportInit = require('./config/passport');

passportInit(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use((req,res,next) => {
    res.locals.session = req.session
    res.locals.user = req.user
    next()
})

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//set view
app.use(express.static("view"))
app.set('views',path.join(__dirname, '/view/'))
app.set('view engine', 'ejs')

//admin
app.use('/admin',admin) 
app.use('/api/admin',adminApi)

//web
app.use('/', web)


//set path 404
app.get('*', (req, res) => {res.render('web/404-page')});




module.exports = app