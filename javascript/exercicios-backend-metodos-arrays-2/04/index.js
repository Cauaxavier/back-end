const numeros = [0, 122, 4, 6, 12, 8, 44];
const todos_sao_pares = function (numeros) {
    const validacao = numeros.every((numero) =>{
        return numero % 2 == 0
    })

    let palavra = validacao == true ? 'Válido' : 'Inválido'
    console.log(`array ${palavra}`)
};

todos_sao_pares(numeros)