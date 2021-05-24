const multer = require('multer');
const path = require('path');

const storge = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './view/uploads' );
    },
    filename: function(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg'||file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(new Error('Unsupported files'), false);
    }
}

const upload = multer({
    storage: storge,
    limits:{
        fileSize:1024*1024*10
    },
    fileFilter:fileFilter
})

module.exports = {
    upload : upload
}
