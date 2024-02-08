let anything: string | number | boolean;

anything = true;

const registerUser = (users: {name: string} | {name: string}[]) => {
    return users;
};

const user = {
    name: 'John'
}

const users = [
    {
        name: 'Jubileu'
    },
    {
        name: 'Ana'
    }
];

console.log(registerUser(users));
