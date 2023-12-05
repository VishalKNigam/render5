
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {
    UserModel
}


// {
//     "Email": "Preety12@gmail.com",
//     "Password": "preety"
//   }