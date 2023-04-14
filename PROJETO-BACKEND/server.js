const express = require ("express") // estamos falando para o computador deixar disponivel aqui no meu projeto o pacote express

const app = express()

const porta = 3333

function chamaPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

app.listen(porta, chamaPorta) //informando o endereço da porta e o indetificador da função dessa porta





