const express = require ("express") // estamos falando para o computador deixar disponivel aqui no meu projeto o pacote express
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla (request, response) {
    response.send("Olá, mundo!") 
    }

function chamaPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, chamaPorta)



