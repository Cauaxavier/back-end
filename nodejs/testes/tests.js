const assert = require("assert");
const { GetPeople } = require("./service");

// install the package nock for simulate requisitions.
const nock = require('nock');

describe("Star Wars Tests", function () {
  this.beforeAll(() => {
    const response = {
      count: 1,
      next: null,
      previous: null,
      results: [
        {
          name: "R2-D2",
          height: "96",
          mass: "32",
          hair_color: "n/a",
          skin_color: "white, blue",
          eye_color: "red",
          birth_year: "33BBY",
          gender: "n/a",
          homeworld: "https://swapi.dev/api/planets/8/",
          vehicles: [],
          starships: [],
          created: "2014-12-10T15:11:50.376000Z",
          edited: "2014-12-20T21:17:50.311000Z",
          url: "https://swapi.dev/api/people/3/",
        },
      ],
    };
    nock('https://swapi.dev/api/people')
      .get('/?search=r2-d2&format=json')
      .reply(200, response)
  });


  it("most look for the r2d2 with correct format", async () => {
    const expected = [
      {
        nome: "R2-D2",
        peso: "96",
      },
    ];
    const baseName = "r2-d2";
    const result = await GetPeople(baseName);
    assert.deepEqual(result, expected);
  });
});

// for execute programme use: node node_modules/mocha/bin/mocha tests.js