const jwt = require('jsonwebtoken');

function checkAuth(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1] //Bearer @#$klfdsljafoi4242@34jasd
        const decodedToken = jwt.verify(token,"gotnotallowtoplayhere");
        req.userData = decodedToken;
        next();
    }catch(e){
        return res.status(401).json({
            message:"กรุณาเข้าสู่ระบบ",
            error:e
        })
    }
}

module.exports = {
    checkAuth :checkAuth
}