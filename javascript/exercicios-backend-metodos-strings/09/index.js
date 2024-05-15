const nome = 'Cauã Gomes Xavier';
let nickname = '';

function criar_nickname(nome) {
    let array = nome.split(' ')
    let auxiliar = array.join('')
    auxiliar = auxiliar.padStart(auxiliar.length + 1, '@')
    auxiliar = auxiliar.toLowerCase()
    for (letra of auxiliar) {
        nickname += letra
        if (nickname.length == 13) {
            break
        }
    }
    return nickname
}

console.log(criar_nickname(nome))