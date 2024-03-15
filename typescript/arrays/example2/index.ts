let computer: { produto: string, lote: number, ano: number, qtd: number };

computer = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 123,
    ano: 2024,
    qtd: 70
}

function labelGenerator(infoComputer: typeof computer): string[] {
    let listOfLabel: string[] = [];

    for (let i = 1; i <= infoComputer.qtd; i++) {
        const label = `${infoComputer.lote}-${infoComputer.ano}-${i.toString().padStart(3, "0")}`;
        
        listOfLabel.push(label); 
    }

    return listOfLabel;
}

console.log(labelGenerator(computer));
