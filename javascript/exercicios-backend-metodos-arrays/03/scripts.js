const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 1;

function tres_carros(nomes, posicao) { // escolhe 3 carros
    const carros = nomes.slice(posicao, posicao + 3);
    console.log(carros.join(' - '))
}

tres_carros(nomes, posicao)