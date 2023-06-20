/*
1 - Obter o usuário
2 - Obter o número do usuário apartir do seu Id
3 - Obter o endereço do usuário pelo Id
*/

function obter_usuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Xavier",
            data_nascimento: new Date()
        })
    }, 1000)
}

function obter_telefone(idusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '88392948',
            ddd: 88
        })
    }, 2000);
}

function obter_endereço(idusuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'devs por amor >:O',
            numero: 0
        })
    }, 2000);
}

obter_usuario(function resolver_usuario(error, usuario) {
    //null || "" || 0 === False
    if (error) {
        console.error('[ERRO] não foi possivel obter o usuario ', error)
        return;
    }
    obter_telefone(usuario.id, function resolver_telefone(error2, telefone) {
        if (error2) {
            console.error('[ERRO] não foi possivel obter o telefone ', error2)
            return;
        }
        obter_endereço(usuario.id, function resolver_endereço(error3, endereço) {
            if (error3) {
                console.error('[ERRO] não foi possivel obter o endereço ', error3)
                return;
            }

            console.log(`
             Nome: ${usuario.nome} 
             Endereço: ${endereço.rua}, ${endereço.numero}
             Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})

