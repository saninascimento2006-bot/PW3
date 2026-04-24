const livros = require("../data/livros")

const findAll = () => {
    return livros
}

const create = (newlivro) => {
    livros.push(newlivro)

    return newlivro
}

const deletee = (id) => {
    const index = livros.findIndex(livro => livro.id == id);

    if (index !== -1) {
    
        return livros.splice(index, 1)[0];}

    return null;
}

const edit = (id, livroAtualizado) => {
    
    const index = livros.findIndex(livro => livro.id == id)

    if (index !== -1) {
        
        livros[index] = { 
            id: livros[index].id, 
            ...livroAtualizado 
        }
        return livros[index] 
    }
    return null
}


const findById = (id) => {
    //for ( let i = 0; i < livros.length; i++ ){
    //    if (livros[i].id == id ) {
    //        return livros[i]
    //    }
    //}

    //return null

    return livros.find( livro => livro.id == id )
}



module.exports = {
    findAll,
    create,
    findById,
    deletee,
    edit
}
