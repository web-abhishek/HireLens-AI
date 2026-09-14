const userModel = require('../models/user.model')

async function registerUserController(req, res) {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
        res.status(400).json({
            msg: "Please provide username, email and password"
        })
    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }]
    })
    
    if (isUserAlreadyExists) {
        res.status(400).json({
            msg: "Account already exists with this email address or username"
        })
    }
}

module.exports = {
    registerUserController
}