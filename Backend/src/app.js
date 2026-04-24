const express = require("express")
const livroController = require("./controllers/livroController")

const app = express()
app.get("/", (request, response) => {
    response.send("The cocain is good for youuuuuuuuuu!")
})

app.use(express.json())

app.post("/livros",livroController.createlivro)

app.get("/livros", livroController.getAlllivros)

app.get("/livros/:id", livroController.getlivroById)

app.delete("/livros/:id", livroController.deletelivro)

app.put("/livros/:id", livroController.editlivro)

module.exports = app