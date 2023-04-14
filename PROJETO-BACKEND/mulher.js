const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = 
[
    {
        nome:'Deise Duarte',
        imagem: 'https://i.postimg.cc/bJ1YgfCb/af2e09804dcb5ea06615c8cca5cb673f.jpg',
        Minibio:'maravilhosa, inteligente, meio lenta, mas esforçada'
    },

    {
        nome:'Rafaela Duarte',
        imagem: 'https://i.postimg.cc/bJ1YgfCb/af2e09804dcb5ea06615c8cca5cb673f.jpg',
        Minibio:'maravilhosa, inteligente, brava, meio preguiçosa, mas esforçada'
    },

    {
        nome:'Simara Conceição',
        imagem: 'https://i.postimg.cc/bJ1YgfCb/af2e09804dcb5ea06615c8cca5cb673f.jpg',
        Minibio:'Desenvolvedora e instrutora'
    }
]

function chamaPorta () {
 console.log("Servidor criado e rodando na porta", porta)
}

function mostraMulher (request, response) {
    response.json(mulheres)
}

app.use(router.get('/mulheres', mostraMulher))
app.listen(porta, chamaPorta)


