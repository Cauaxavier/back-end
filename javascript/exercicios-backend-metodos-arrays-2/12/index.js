const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];

const programadores = pessoas.filter((pessoa) => {
    let {idade, profissao} = pessoa
    return profissao == 'Programador' && idade > 20;
})  

const jornalistas = pessoas.filter((pessoa) => {
    let {idade, profissao} = pessoa
    return profissao == 'Jornalista' && idade > 30;
}) 

const jovens = pessoas.filter((pessoa) => {
    let {idade, profissao} = pessoa;
    return profissao == 'Programador' && idade < 30 || profissao == 'Jornalista' && idade < 30 ;
}) 

console.log(jovens);