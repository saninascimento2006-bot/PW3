const livroModel = require("../models/livroModel")


const getAlllivros = (req, res) => {
    const livros = livroModel.findAll()

    return res.send(livros)
}

const createlivro =  (req, res ) => {

     const titulo = req.body.titulo
     const autor = req.body.autor

     const newlivro = {
        id: Date.now(),
        titulo : titulo,
        autor : autor
     }
     const createdlivro = livroModel.create(newlivro)
     
    res.status(201).json(createdlivro)

}

const deletelivro =  (req, res ) => {

    const id = req.params.id

    const livroDeletado = livroModel.deletee(id)

    if (!livroDeletado) {
        return res.status(404).json({
            message: "Livro não encontrado para exclusão."
        })
    }

    return res.status(200).json({
        message: "Livro removido com sucesso!",
        livro: livroDeletado
    })
}

const editlivro =  (req, res ) => {

    const id = req.params.id
    const { titulo, autor } = req.body

    const livroAtualizado = {
        titulo, autor 
     }
    
     const livroEditado = livroModel.edit(id, livroAtualizado)

    return res.status(200).json(livroEditado)

}

const getlivroById = (req, res) => {
    const id = req.params.id

    const livro = livroModel.findById(id)
    
    if ( !livro ) {
        return res.status(404).json({
            messautor: "Usuário não escontrado."
        })
    }

    return res.json(livro)
}

module.exports = {
    getAlllivros,
    createlivro,
    getlivroById,
    deletelivro,
    editlivro
}