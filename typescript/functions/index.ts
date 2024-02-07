function show(name: string): string {
    return `Olá, ${name}`;
}

const showBiggerAge = (age: number): boolean => {
    if (age < 18) {
        return false;
    }

    return true;
}

function showUser(user: {name: string, age: number}): string {
    return `Olá ${user.name}`
}

function showArray(array: string[]): string {
    return array[0];
}

console.log(showArray(['123', 'oujasgkof']));

console.log(showUser({ name: 'Guido', age: 19 }));

const sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(1, 2));
