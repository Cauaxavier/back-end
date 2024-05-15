const email = ".jose.messias@cubos";
let verificacao = 0;

if (!email.includes('@')) {
    verificacao += 1
}

if (email.indexOf('.', email.length - 1) !== -1 || email.lastIndexOf('.', 0) !== -1) {
    verificacao += 1
} else if (!email.includes('.')) {
    verificacao += 1
}

let mensagem = verificacao > 0 ? 'E-mail inválido' : 'E-mail válido'

console.log(mensagem)
