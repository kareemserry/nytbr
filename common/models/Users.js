const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uuid: ObjectId,
    username: String,
    passwordBcrypt: String,
    discordID: String
});

const Users = mongoose.model('Users', userSchema);
module.exports = Users;