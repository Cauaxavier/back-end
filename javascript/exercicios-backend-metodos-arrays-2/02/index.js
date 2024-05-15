const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificacao = palavras.every((palavra) => {
    return palavra.length < 5;
})

if (verificacao) {
    console.log('array válido.');
} else {
    console.log('existe palavra inválio.');
}
