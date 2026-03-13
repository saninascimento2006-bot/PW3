const express = require("express")
const userController = require("./controllers/userController")
const app = express()
app.get("/", (request, response) => {
    response.send("The cocain is good for youuuuuuuuuu!")
})

app.post("/users", (req, res ) => {
    res.send("Tinha que colocar um negocio aq mas nao sei oq")

})


app.get("/users", userController.getAllUsers)

module.exports = app