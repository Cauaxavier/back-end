const numeros = [1, 98, -76, 0, 12, 102, 19, 5, 60, 44]

const maiorNumero = numeros.reduce((maiorValor, valorAtual) => {
    if (maiorValor < valorAtual) {
        maiorValor = valorAtual
    }
    return maiorValor
})

console.log(maiorNumero);