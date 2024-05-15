const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function fila_atendimento (pacientes, operacao, nomes_paciente) {
    if (operacao == 'agendar') {
        pacientes.push(nomes_paciente)
    } else if (operacao == 'atender') {
        pacientes.shift()
    } else {
        console.log('por favor digite uma opção valida.')
    }
    console.log(`Pacientes: ${pacientes.join(', ')}.`)
}

fila_atendimento(pacientes, 'atender')