const express = require("express");
const path = require("path")


const app = express();

//include route 
const web = require('./routes/web/index')



//set view
app.use(express.static("view"))
app.set('views',path.join(__dirname, '/view/'))
app.set('view engine', 'ejs')

//send route
app.use('/', web)
//set path 404
app.get('*', (req, res) => {res.render('web/404-page')});


module.exports = app