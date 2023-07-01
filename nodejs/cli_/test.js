const { ok, deepEqual } = require("assert");

const database = require("./database");

const default_item_register = {
  name: "Flash",
  power: "Speed",
  id: 1,
};

describe("heroes manipulation suite", () => {
  before(async () => {
    await database.register(default_item_register);
  });

  it("must search a hero using the files", async () => {
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
});

// for execute programme use: node node_modules/mocha/bin/mocha tests.js or npm test
// explanation: i put the "macho" in "test" in the json for to be able of use "npm test"
