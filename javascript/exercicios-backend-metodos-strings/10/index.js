const nomeArquivo = 'Foto da Familia.png';
const indice = nomeArquivo.lastIndexOf('.')
const extensao = nomeArquivo.slice(indice);
const extensoes = ['.jpg', '.jpeg', '.gif', '.png']
let verficacao = false;

function validador_arquivo (extensao) {
    for (palavra of extensoes) {
        if (extensao == palavra) {
            verficacao = true
        }
    }
    return verficacao == true ? 'Válido' : 'Inválido'
}

console.log(`Arquivo ${validador_arquivo(extensao)}`)