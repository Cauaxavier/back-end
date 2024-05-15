const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutas_reverse = [...frutas]
let resultado = ''
frutas_reverse.reverse()

for (let i = 0; i < frutas_reverse.length; i++) {
    let auxiliar = i == frutas_reverse.length - 1 ? `${frutas_reverse[i]}` : `${frutas_reverse[i]}, `
    resultado += auxiliar
}

console.log(`a) ${resultado}`)

frutas.pop()
frutas.shift()
frutas.push('melão')

console.log('b) ' , frutas)