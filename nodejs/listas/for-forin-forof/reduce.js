const { GetPeople } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
  for (let index = 0; index <= this.length - 1; index++) {
    finalValue = callback(finalValue, this[index], this);
  }
  return finalValue;
};

async function main() {
  try {
    const { results } = await GetPeople(`a`);
    const weights = results.map((item) => parseInt(item.height));
    console.log("weights: ", weights);

    /*
    const total = weights.reduce((previous, next) => {
      return previous + next;
    }, 0); // Get second value how value initial for if first value==null don't broken the program
    */
    const myList = [
      ['caua', 'xavier'],
      ['love', 'programming']
    ];

    const result = myList
      .myReduce((previous, next) => {
        return previous.concat(next);
      }, [])
      .join("- ");

    console.log("total: ", result);
  } catch (error) {
    console.error("Intern Error", error);
  }
}

main();
