const cnpj = "12.345.678/0001-99";
const auxiliares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultado = '';

function tirar_caracteres(numeros) {
    for (numero of numeros) {
        for (auxiliar of auxiliares) {
            if (numero == auxiliar) {
                resultado += numero
                break
            }
        }
    }
    return resultado
}

console.log(tirar_caracteres(cnpj))