let users: { nome: string, idade: number, status: boolean }[];

users = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

function searchPeople(list: typeof users, word:string): typeof users {

    const filteredUsers = list.filter(user => user.nome.toLowerCase().includes(word));

    return filteredUsers;
}

console.log(searchPeople(users, 'JO'.toLowerCase()));
