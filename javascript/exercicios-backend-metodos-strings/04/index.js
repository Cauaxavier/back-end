let identificador = "0123";
let nome = "caua Gomes xavier";
let email = "      jose@email.com  ";
// let array = nome.split(' ')
// let i = 0

identificador = identificador.padStart(6, '0')
email = email.trim()

for (let i = 0; i < nome.length; i++) {
    if (nome[i] == ' ') {
        letra_maiuscula = nome[i+1].toUpperCase()
        nome = nome.replace(` ${nome[i+1]}`, ` ${letra_maiuscula}`)
    }
}

console.log(identificador)
console.log(email)
console.log(nome)