const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/User");

const Users = new mongoose.Schema({
    name: String,
    email: String,
    password: String
    })


    const UserModel = mongoose.model("User", Users)
    module.exports =  UserModel ;