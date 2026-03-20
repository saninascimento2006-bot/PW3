const usermodel = require("../models/userModel")


const getAllUsers = (req, res) => {
    const users = usermodel.findAll()

    return res.send(users)
}

const createuser =  (req, res ) => {

     const name = req.body.name
     const age = req.body.age

     const newUser = {
        id: Date.now(),
        name : name,
        age : age
     }
     const createdUser = usermodel.create(newUser)
     
    res.status(201).json(createdUser)

}




module.exports = {
    getAllUsers,
    createuser
}