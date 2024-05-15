const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];

const filtrarMotoristas = usuários.filter((usuario) => {
    let {idade} = usuario;
    return idade > 17 && idade <= 65;
}); 

const temHabilitacao = filtrarMotoristas.every((motorista) => {
    let {habilitado} = motorista;
    return habilitado == true;
});

if (temHabilitacao) {
    console.log('todos passaram no teste');
} else { 
    console.log('todos precisam estar habilitados');
}