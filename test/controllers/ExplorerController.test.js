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

    // test("prueba 2) obtener los nombres de los usuarios", () => {
    //     const grupoExplorers = explorers.filter(
    //         (explorer) => explorer.mission === "node"
    //     );

    //     const infoARevisar =
    //   ExplorerController.getExplorersUsernamesByMission("node");
    //     infoARevisar.forEach((personaDelGrupo) => {
    //         expect(personaDelGrupo).toBe(grupoExplorers.githubUserName);
    //     });
    // });

    // test("prueba 3) obtener la cantidad de usuarios", () => {
    //     const personas = explorers.filter(
    //         (explorer) => explorer.mission === "node"
    //     );
    //     const info = ExplorerController.getExplorersAmountByMission("node");

    //     expect(info.length).toBe(personas.length);
    // });

    test("prueba 4) obtener 'fizz', 'buzz', 'fizzbuzz', o el mismo score con el number proporcionado", () => {});
});