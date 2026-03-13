const usermodel = require("../models/userModel")


const getAllUsers = (req, res) => {
    const users = usermodel.findAll

    return res.send(users)
}
module.exports = {
    getAllUsers
}