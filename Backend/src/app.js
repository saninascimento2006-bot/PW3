const express = require("express")
const userController = require("./controllers/userController")

const app = express()
app.get("/", (request, response) => {
    response.send("The cocain is good for youuuuuuuuuu!")
})

app.use(express.json())

app.post("/users",userController.createuser)

app.get("/users", userController.getAllUsers)

module.exports = app