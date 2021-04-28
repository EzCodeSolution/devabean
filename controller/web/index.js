const getHome = (req,res) => {
    res.render("web/index")
}

module.exports = {
    getHome:getHome
}