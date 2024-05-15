const numeroCartao = '1111222233334444';
let resultado = ''

for (let i = 0; i < numeroCartao.length; i++) {
    if (i > 3 && i < 12) {
        resultado += '*'
    } else {
        resultado += numeroCartao[i]
    }
}

console.log(resultado)
