const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// For Register a new user
async function registerUserController(req, res) {
    try {
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

        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            email,
            password: hash
        })
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.cookie("token", token);

        return res.status(201).json({
            msg: "User register successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({ msg: "Something went wrong while registering user" });
    }
}

// For login user
async function loginUserController(req, res) {
    try {
        const { username, email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: "Invalid Credentials"
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(400).json({
                msg: "Invalid Credentials"
            })
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie("token", token);

        return res.status(200).json({
            msg: "Logged in successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({ msg: "Something went wrong while login the user" });
    }

}

module.exports = {
    registerUserController,
    loginUserController
}

console.log('Auth controller ready to use')