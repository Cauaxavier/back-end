const palavras = ["arroz", "feijão", "carne", "macarrão"];

const tem_bebida_proibida = (compras) => {
    const verificacao = compras.some((compra) => {
        return compra == 'cerveja' || compra == 'vodka';
    })

    if (verificacao) {
        return 'lista, joão. possui bebida com venda proibida!'
    } else {
        return 'tudo certo, vamos as compras!'
    }
}

console.log(tem_bebida_proibida(palavras))