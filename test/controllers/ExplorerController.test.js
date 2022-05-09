const ExplorerController = require("./../../lib/controllers/ExplorerController");
const explorers = require("./../../explorers.json");

describe("pruebas de Explorer Controller", () => {
  test("prueba 1) obtener el explorer por la mission", () => {
    const personas = explorers.filter(
      (explorer) => explorer.mission === "node"
    );
    const datosARevisar = ExplorerController.getExplorersByMission("node");
    datosARevisar.forEach((persona, i) => {
      expect(persona.mission).toBe(personas[i].mission);
    });
  });

  test("prueba 2) obtener los nombres de los usuarios por la mision enviada", () => {
    const gente = explorers
      .filter((explorer) => explorer.mission === "node")
      .map((explorer) => explorer.githubUsername);

    const personas = ExplorerController.getExplorersUsernamesByMission("node");
    expect(personas).toEqual(gente);
  });

  test("prueba 3) obtener la cantidad de explorers por la mision enviada", () => {
    const amountExplorers = explorers.filter(
      (explorer) => explorer.mission === "node"
    );

    const cantExplorers =
      ExplorerController.getExplorersAmountByMission("node");

    expect(cantExplorers).toBe(
      `la cantidad de explorers son :${amountExplorers.length}`
    );
  });

  test("prueba 4) obtener 'fizz', 'buzz', 'fizzbuzz', o el mismo score con el number proporcionado", () => {
    const returnFizzBuzz = ExplorerController.applyFizzbuzz(15);
    expect(returnFizzBuzz).toBe("FIZZBUZZ");
  });
});
