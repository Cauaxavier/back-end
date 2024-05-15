const endereços = [
    { cep: 11011222, rua: "Rua dos Artistas" },
    { cep: 11011333, rua: "Rua Augusta" },
    { cep: 11022444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const localizar_cep = (endereços, cep) => {
    const buscar_endereço = endereços.find((endereço) => {
        return endereço.cep === cep;
    });
    return buscar_endereço
}

console.log(localizar_cep(endereços, 11011222).rua);
