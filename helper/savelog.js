const models = require('../models')

const savelog = (userId,Code) => {
    var activity = {
        AccoutId:userId,
        Description:Code
    }
    models.ActivityLog.create(activity).then(rs => {
        console.log("save log success")
    }).catch(e => {
        console.log(e)
    })
}

module.exports = {
    savelog:savelog
}