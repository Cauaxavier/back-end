const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log("the item was salved in Postgres");
  }
}

module.exports = Postgres