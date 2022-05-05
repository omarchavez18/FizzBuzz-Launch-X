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
});
