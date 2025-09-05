const JWT=require("jsonwebtoken");

function auth(req,res,next){
    const token = req.headers.authorization?.split("")[1];
    if(!token)return res.status(401).json({message:"no token"});

    try{
        const decoded = JWT.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        res.status(401).json({message:"invalid token"});
    }
}
module.exports = auth;