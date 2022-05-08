const ExplorerService = require("../../lib/services/ExplorersService");
const explorers = require("../../explorers.json");

/*obtener lista de explorers que solo esten en node */
describe("prueba de ExplorerService.js", () => {
    test("prueba 1) Filter by Mission ", () => {
        const astronautas = explorers.filter(
            (explorer) => explorer.mission === "node"
        );
        const newService = ExplorerService.filterByMission(explorers, "node");
        newService.forEach((astronauta, i) => {
            expect(astronauta.mission).toBe(astronautas[i].mission);
        });
    });

    test("prueba 2) get amount of Explorers", () => {
        const amount = explorers.filter((explorer) => explorer.mission === "node");
        const viajeros = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "node"
        );
        expect(viajeros).toBe(`la cantidad de explorers son :${amount.length}`);
    });

    test("prueba 3) get explorers username by mission", () => {
        const users = explorers.filter((explorer) => explorer.mission === "node");
        const usuarios = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );
        usuarios.forEach((explorerName, index) => {
            expect(explorerName).toBe(users[index].githubUsername);
        });
    });
});
