const express = require("express");
const path = require("path")
const bodyParser = require('body-parser')


const app = express();

//include route 
const web = require('./routes/web/index')
const user = require('./routes/api/user.route')

const admin = require('./routes/web/admin/index')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//set view
app.use(express.static("view"))
app.set('views',path.join(__dirname, '/view/'))
app.set('view engine', 'ejs')

//api 

app.use('/api/',user)
//admin
app.use('/admin/',admin)

//send route
app.use('/', web)
//set path 404
app.get('*', (req, res) => {res.render('web/404-page')});




module.exports = app