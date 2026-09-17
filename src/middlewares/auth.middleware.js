const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklist.model")

async function authUser(req, res, next){
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            msg: "Token not provided"
        })
    }
    const isTokenBlacklisted = await blacklistTokenModel.findOne({token})
        
    if (isTokenBlacklisted) {
        res.status(200).json({
            msg: "Token is invalid"
        })
    }

    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)
        
        req.user = decoded;

        next();
    }
    catch (error) {
        res.status(401).json({
            msg: "Invalid token"
        })
    }
}

module.exports = { authUser };
console.log("authmiddleware is ready to use")