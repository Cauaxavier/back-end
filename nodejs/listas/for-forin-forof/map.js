const service = require('./service')

Array.prototype.myMap = function(callback) {
    const newArrayMapped = []
    for (let i = 0; i <= this.length - 1; i++) {
        const result = callback(this[i], i)
        newArrayMapped.push(result)
    }
    return newArrayMapped;
}

async function main() {
    try {
        const result = await service.GetPeople('a')
        /*const names = []
        result.results.forEach(function (people) {
            names.push(people.name)
        })

        const names = result.results.map(function(people) {
            return people.name
        })*/

        //const names = result.results.map((people) => people.name)

        const names = result.results.myMap(function(people, i) {
            return `[${i+1}] ${people.name}`
        })

        console.log('Names', names)
    } catch (error) {
        console.error('Intern error', error)
    }
}

main()