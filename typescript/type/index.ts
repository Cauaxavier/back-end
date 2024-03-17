type User = {
    name: string,
    email: string,
    cpf: string,
    age: number,
    endereco: Endereco
}

type Endereco = {
    neighborhood: string,
    street: string,
    number: number,
}

function dataUser(data: User): User {
    return data
}

const user = {
    name: 'junin',
    email: 'junin@gmail.com',
    cpf: '12345678901',
    age: 21,
    endereco: {
        neighborhood: "Centro",  
        street: "Rua dos Bobos",  
        number: 1005
    }
};

console.log(dataUser(user))
