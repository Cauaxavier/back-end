const cidades = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
    "Brasilia",
    "Recife",
]

const nome_maior = cidades.reduce((resultado, valor_atual) => {
    if (resultado.length < valor_atual.length) {
        resultado = valor_atual;
    }

    return resultado
}, cidades[0])

console.log(nome_maior)