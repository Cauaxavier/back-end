import {  writeFileSync, readFileSync } from 'fs'

const read_file = (fileName: string): unknown => {
    return JSON.parse(String(readFileSync(`./${fileName}`)))
}

function write_file(data: any, fileName: string) {
    const formattedFile = read_file(fileName) as string[]
    formattedFile.push(data) 
    writeFileSync(`./${fileName}`, JSON.stringify(formattedFile))
}

write_file('name', 'bd.json')
console.log(read_file('bd.json'))

