const { GetPeople } = require("./service");

/*

const people = {
    name: 'Xavier',
    age: 19,
}

const { name, age } = people
console.log(name, age)
*/

Array.prototype.MyFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await GetPeople("a");
    /*
        const FamilyLars = results.filter(function (item) {
            // by default need return a boolean
            // for inform if should to keep or remove from list.
            // False > remove from list
            // True > keep
            // did not find = -1
            // find = positionInArray

            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result
        }) */

    const FamilyLars = results.MyFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = FamilyLars.map((people) => people.name);
    console.log(names);
  } catch (error) {
    console.error("error intern: ", error);
  }
}

main();
