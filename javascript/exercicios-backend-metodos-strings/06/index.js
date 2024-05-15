const celular = String(99918888);
const mensagem = `9 ${celular.slice(2, 6)}-${celular.slice(6)}` 

if (celular.length < 10) {
    console.log(mensagem)
} else {
    console.log(`(${celular.slice(0,2)}) ${mensagem}`)
}
