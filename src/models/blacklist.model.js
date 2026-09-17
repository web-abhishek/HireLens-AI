const mongoose = require("mongoose");
const { applyTimestamps } = require("./user.model");

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const blacklistTokenModel = mongoose.model("blasklistTokens", tokenBlacklistSchema);
module.exports = blacklistTokenModel;
console.log("Blacklist Model is ready to use")