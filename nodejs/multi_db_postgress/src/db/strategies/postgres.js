const ICrud = require("./interfaces/interfaceCrud");
const Sequelize = require("sequelize");

class Postgres extends ICrud {
  constructor() {
    super();
    this._driver = null;
    this._heroes = null;
    this._connect()
  }
  async isConnected() {
    try {
      await this._driver.authenticate()
      return true
    }
    catch (error) {
      console.log('fail!', error)
      return false;
    }
  }
  async defineModel () {
    this._heroes = driver.define("heroes", {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    }, {
      tableName: 'TB_HEROES',
      freezeTableName: false,
      timestamps: false,
    });
    await Heroes.sync()
  }
  create(item) {
    console.log("the item was salved in Postgres");
  }
  _connect() {
    this._driver = new Sequelize("heroes", "caua", "senha1", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operationAliases: false,
    });
  }
}

module.exports = Postgres;
