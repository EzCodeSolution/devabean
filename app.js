const express = require("express");
const path = require("path")


const app = express();

//set view
app.use(express.static("view"))
app.set('views',path.join(__dirname, '/view/'))
app.set('view engine', 'ejs')

//set path 404
app.get('*', (req, res) => {res.render('web/404-page')});


module.exports = app