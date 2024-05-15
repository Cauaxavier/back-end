const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 5;

function separar_em_grupos(pessoas, quantidade) {
    let grupo1 = [];
    let grupo2 = [];
    for (let i = 0; i < pessoas.length; i++) {
        if (i <= quantidade - 1) {
            //let mensagem = i == quantidade ? `${pessoas[i]}.` :` ${pessoas[i]}, `
            //grupo1 += pessoas[i]
            grupo1.push(pessoas[i])
        } else {
            //grupo2 += pessoas[i]
            grupo2.push(pessoas[i])
        }
    }
    console.log(`Grupo 1: ${grupo1.join(', ')}.`);
    console.log(`Grupo 2: ${grupo2.join(', ')}.`);
}

separar_em_grupos(nomes, tamanhoDoGrupo);