const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

function encontrar_dono (usuarios, pet) {
    let dono = '';
    for (usuario of usuarios) {
        if (usuario.pets.includes(pet)) {
            dono = usuario.nome
            console.log(`O dono(a) do(a) ${pet} é o(a) ${dono}`)
            return;
        }
    }
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
}

encontrar_dono(usuarios, 'Lulu');