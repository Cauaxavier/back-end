/*
1 - Obter o usuário
2 - Obter o número do usuário apartir do seu Id
3 - Obter o endereço do usuário pelo Id
*/

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
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            return resolve({
                telefone: '88392948',
                ddd: 88
            })
        }, 2000);

    })
}

function obter_endereço(idusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'devs por amor >:O',
            numero: 0
        })
    }, 2000);
}

const usuario_promise = obter_usuario()

// para manipular o sucesso é usado o .then
// para manipular o erro é usado o .catch
// usuario -> telefone -> telefone

usuario_promise
    .then(function (usuario) {
        return obter_telefone(usuario.id)
    })
    .then(function (resultado) {
        console.log('Resultado ', resultado)
    })
    .catch(function (error) {
        console.error('ERRO EM ', error)
    })