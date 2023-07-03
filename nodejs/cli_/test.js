const { ok, deepEqual } = require("assert");

const database = require("./database");

const default_item_register = {
  name: "Flash",
  power: "Speed",
  id: 1,
};

const default_item_update = {
  name: "Green lantern",
  power: "Ring energy",
  id: 2,
};

describe("heroes manipulation suite", () => {
  before(async () => {
    await database.register(default_item_register);
    await database.register(default_item_update);
  });

  it("Must search a hero using the files", async () => {
    const expected = default_item_register;
    const [result] = await database.list(expected.id);

    deepEqual(result, expected);
  });

  it("Must register a hero, using files", async () => {
    const expected = default_item_register;
    const result = await database.register(default_item_register);
    const [actual] = await database.list(default_item_register.id);

    deepEqual(actual, expected);
  });

  it("Must remove hero by id", async () => {
    const expected = true;
    const result = await database.remove(default_item_register.id);

    deepEqual(result, expected);
  });

  it("Must update a hero for id", async () => {
    const expected = {
      ...default_item_update,
      name: "Batman",
      power: "Money",
    };

    const newdata = {
      name: "Batman",
      power: "Money",
    };

    await database.update(default_item_update.id, newdata);
    const [result] = await database.list(default_item_update.id);
    
    deepEqual(result, expected);
  });
});

// for execute programme use: node node_modules/mocha/bin/mocha tests.js or npm test
// explanation: i put the "macho" in "test" in the json for to be able of use "npm test"
