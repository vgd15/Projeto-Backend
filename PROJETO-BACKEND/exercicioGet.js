const express = require('express')
const router = express.Router()


const app = express()
porta = 4444


function mostraHora (request, response) {
const date = new Date()
const hora = date.toLocaleTimeString('pt-BR')
response.send(hora)
}

function chamaPorta() {
    console.log("Seu servidor foi criado e está rodando na porta", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, chamaPorta)