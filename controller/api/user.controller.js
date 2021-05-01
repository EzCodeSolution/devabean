const models = require('../../models')
const jwt = require('jsonwebtoken')
const helper = require('../../helper/savelog')

const getProfile = (req,res) => {   
    models.Account.findByPk(req.userData.userId).then(rs => {
        var profile = {
            DisplayName : rs.DisplayName,
            Email : rs.Email,
            Address : rs.Address,
            FirstName : rs.FirstName,
            LastName : rs.LastName,
            Tel : rs.Tel,
            Line : rs.Line,
            DataJson : rs.DataJson
        }
        helper.savelog(req.userData.userId,"11")
        res.status(200).json(profile)
    }).catch(e => {
        res.status(404)
    })
}

const postUpdateProfile = (req,res) =>{
    const data = req.body;
    console.log(data)
    
}

module.exports = {
    getProfile : getProfile,
    postUpdateProfile : postUpdateProfile
}