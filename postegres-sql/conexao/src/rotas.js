const rotas = require("express").Router();
const filaAutores = require("./controladores/autores");

rotas.post("/autor", filaAutores.Cadastrar);
rotas.get("/autor/:id", filaAutores.obterAutor);
rotas.post("/autor/:id/livro", filaAutores.cadastrarLivro);
rotas.get("/livro", filaAutores.obterLivros);
module.exports = rotas
