const Reader = require("../lib/utils/Reader");
const explorers = require("../explorers.json");
describe("testing de Reader.js", () => {
    test("read json file", () => {
        const readerPrueba = Reader.readJsonFile("explorers.json");
        expect(readerPrueba).toStrictEqual(explorers);
    });
});
