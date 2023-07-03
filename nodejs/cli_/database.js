const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
// other form to get the json's data
// const dataJson = require('/.heroes.json')

class Database {
  constructor() {
    this.name_file = "heroes.json";
  }

  async getDataFile() {
    const file = await readFileAsync(this.name_file, "utf-8");
    return JSON.parse(file.toString());
  }

  async write_file(data) {
    await writeFileAsync(this.name_file, JSON.stringify(data));
    return true;
  }

  async register(hero) {
    const data = await this.getDataFile();
    const id = hero.id <= 2 ? hero.id : Date.now();

    const heroWithId = {
      id,
      ...hero,
    };
    const finalData = [...data, heroWithId];

    const result = await this.write_file(finalData);
    return result;
  }

  async list(id) {
    const data = await this.getDataFile();
    const filtered_data = data.filter((item) => (id ? item.id === id : true));
    return filtered_data;
  }

  async remove(id) {
    if (!id) {
      return await this.write_file([]);
    }

    const data = await this.getDataFile();
    const index = data.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
      throw Error("The informed hero don't exist.");
    }

    data.splice(index, 1);
    return await this.write_file(data);
  }

  async update(id, modifications) {
    const data = await this.getDataFile();
    const index = data.findIndex((item) => item.id === parseInt(id));

    if (index === -1) {
      throw Error("The informed hero don't exist.");
    }

    const current = data[index];
    const objectUpdate = {
      ...current,
      ...modifications,
    };
    data.splice(index, 1);

    return await this.write_file([...data, objectUpdate]);
  }
}

module.exports = new Database();
