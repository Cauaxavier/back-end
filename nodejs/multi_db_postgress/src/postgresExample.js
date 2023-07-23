// run "npm install pg-hstore pg sequelize"
const Sequelize = require("sequelize");
const driver = new Sequelize("heroes", "caua", "senha1", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operationAliases: false,
});

async function main() {
  const Heroes = driver.define("heroes",
    {
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
    },
    {
      tableName: "TB_HEROES",
      freezeTableName: false,
      timestamps: false,
    }
  );
  await Heroes.sync()
  await Heroes.create({
    nome: 'Lanterna',
    poder: 'Anel'
  })
  const result = await Heroes.findAll({
    raw: true
  })
  console.log('result', result)
}

main();
