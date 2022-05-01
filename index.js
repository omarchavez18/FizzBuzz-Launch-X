const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorersService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));

//
console.log(FizzbuzzService.applyValidationInExplorer(explorers[4]));
