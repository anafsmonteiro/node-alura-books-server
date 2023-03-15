const express = require('express') //uma função
const rotaLivro = require('./rotas/livro')

const app = express() //retornando a função
app.use(express.json())

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})