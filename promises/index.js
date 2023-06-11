/*
1 - Obter o usuário
2 - Obter o número do usuário apartir do seu Id
3 - Obter o endereço do usuário pelo Id
*/

const util = require('util')
const obterEnderecoAssync = util.promisify(obter_endereco)

function obter_usuario() {
    //quando der erro: reject(erro)
    //quando sucesso: resolve
    return new Promise(function resolver_promise(resolve, reject) {
        setTimeout(function () {
            //return reject(new Error('DEU RUIM DE VERDADE!') )

            return resolve({
                id: 1,
                nome: "Xavier",
                data_nascimento: new Date()
            })
        }, 1000)

    })
}

function obter_telefone(idusuario) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '88392948',
                ddd: 88
            })
        }, 2000);

    })
}

function obter_endereco(idusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'devs por amor >:O',
            numero: 0
        })
    }, 2000);
}

// 1 - adicionar a plavra async -> automaticamente ela retornará uma Promise

main()

async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obter_usuario()
        // const telefone = await obter_telefone(usuario.id)
        // const endereco = await obterEnderecoAssync(usuario.id)
        const resultado = await Promise.all([
            obter_telefone(usuario.id),
            obterEnderecoAssync(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]

        console.log(`
            Nome: ${usuario.nome} 
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}      
        `)
        console.timeEnd('medida-promise')
    } catch (error) {
        console.error('HOUVE UM ERRO EM', error)
    }
}

/*
const usuario_promise = obter_usuario()

// para manipular o sucesso é usado o .then
// para manipular o erro é usado o .catch
// usuario -> telefone -> telefone

usuario_promise
    .then(function (usuario) {
        return obter_telefone(usuario.id)
            .then(function resolver_telefone(result){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAssync(resultado.usuario.id)
        return endereco.then(function resolver_endereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        `)
    })
    .catch(function (error) {
        console.error('ERRO EM ', error)
    })
*/