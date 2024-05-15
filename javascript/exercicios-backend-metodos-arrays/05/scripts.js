const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendar_paciente (lista_pacientes, nome) {
    lista_pacientes.push(nome)
    return lista_pacientes
}

function atender_paciente (lista_pacientes) {
    lista_pacientes.shift()
    return lista_pacientes
}

function cancelar_atendimento (lista_pacientes, nome) {
    let indice = lista_pacientes.indexOf(nome)
    lista_pacientes.splice(indice, 1)
    return lista_pacientes
}

console.log(agendar_paciente(pacientes, 'Xavier'))
//console.log(cancelar_atendimento(pacientes, 'Bárbara'))