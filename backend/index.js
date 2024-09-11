const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

let alunos = [
    {
        "id": "1",
        "nome" : "Miguel",
        "cpf" : "123.456.789-10"
    }
]

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    let retorno = {}
    retorno = {"mensagem":  "Servidor TWM"};
    console.log("Alguém acessou o endereço root");
    res.send(retorno);
});

app.get("/about", (req, res) => {
    let retorno = {}
    retorno = {"mensagem": "Dentro do About"};
    console.log("Alguém entrou no /about");
    res.send(retorno);
})

app.post("/alunos", (req, res) => {
    let dados = req.body;
    console.log(dados);
    alunos.push(dados);
    console.log(alunos);
    retorno = {"mensagem": "Dentro do POST"};
    res.send(retorno);
})

app.get("/alunos", (req, res) => {
    res.send(alunos);
})

app.listen(port, () => {
    console.log(`servidor em execução na porta ${port}`);
});