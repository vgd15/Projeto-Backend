const mongoose = require('mongoose')
require('dotenv').config()


async function conectaBancoDeDados() {

    //o try está tentando rodar o bloco que está dentro dele, qualquer erro vai ser falado no catch


    try {
        console.log("Conexão com o banco de dados iniciou")

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com o banco de dados feita com sucesso')
    } catch (erro) {
        console.log(erro)
    }

}

module.exports = conectaBancoDeDados