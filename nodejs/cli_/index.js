const { Command } = require("commander");
const Database = require("./database");
const Hero = require("./hero");

async function main() {
  const program = new Command();

  program
    .version("version beta")
    .option("-n, --name [value]", "hero's name")
    .option("-p, --power [value]", "hero's name")
    .option("-i, --id [value]", "hero's id")
    .option("-r, --register", "register a hero")
    .option("-l, --list", "list a hero")
    .option("-d, --delete", "delete a hero")
    .option("-u, --update [value]", "update a hero");

  program.parse(process.argv);

  const options = program.opts();
  const hero = new Hero(options);

  try {
    //REGISTER
    if (options.register) {
      delete hero.id;
      const result = await Database.register(hero);

      if (!result) {
        console.error("Hero was not registered");
        return;
      }

      console.log("Hero registered with success");
    }

    //LIST
    if (options.list) {
      const result = await Database.list();
      console.log(result);
      return;
    }

    //DELETE
    if (options.delete) {
      const result = await Database.remove(hero.id);
      if (!result) {
        console.error("Hero was not deleted");
        return;
      }
      console.log("Hero deleted with success");
    }

    //UPDATE
    if (options.update) {
      const idToUpdate = parseInt(options.update);
      delete hero.id;
      const data = JSON.stringify(hero);
      const heroUpdate = JSON.parse(data);
      const result = await Database.update(idToUpdate, heroUpdate);
      if (!result) {
        console.error("Hero was not updated");
        return;
      }
      console.log("Hero updated with success");
    }
  } catch (error) {
    console.error("error intern", error);
  }
}

main();
