const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log("the item was salved in MongoDB");
  }
}

module.exports = MongoDB