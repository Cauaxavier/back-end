const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const resultado = frutas.map((fruta) => {
    const indice = frutas.findIndex((elementoAtual) => {
       return elementoAtual === fruta;
    })
    let primeiraLetra = fruta[0].toUpperCase();
    let restoDoNome = fruta.slice(1, fruta.length + 1).toLowerCase();
    return `${indice} - ${primeiraLetra}${restoDoNome}`;
});

console.log(resultado)