const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]
let resultado = '';

const cityFilter = cidades.filter((cidade) => {
    return cidade.length <= 8;
})

for (city of cityFilter) {
    let auxiliar = city === cityFilter[cityFilter.length - 1] ? `${city}.` : `${city}, `
    resultado += auxiliar
}

console.log(resultado);