const EventEmitter = require('events')
class MeuEmissor extends EventEmitter {

}
const meu_emissor = new MeuEmissor()
const NomeEvento = 'usuario:click'
meu_emissor.on(NomeEvento, function(click) {
    console.log('O usuário clicou ', click)
})

/*
meu_emissor.emit(NomeEvento, 'na barra de rolagem')
meu_emissor.emit(NomeEvento, 'no ok')

let count = 0
setInterval(function () {
    meu_emissor.emit(NomeEvento, 'no ok' + (count++))
}, 1000)
*/

const stdin = process.openStdin()

stdin.addListener('data', function(value) {
    console.log(`Você digitou: ${value.toString()}`)
})

/*
function main() {
    return new Promise(function(resolve, reject) {
        stdin.addListener('data', function(value) {
            // console.log(`Você digitou: ${value}`)
            return resolve(value)
        })
    })
}

main().then( function(resultado) {
    console.log('Resultado', resultado.toString())
})
*/