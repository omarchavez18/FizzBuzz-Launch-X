const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorersService");

const explorers = Reader.readJjsonFile("explorers.json");
//console.log(explorers);

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));
console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

//ExplorerService.getExplorersUsernamesByMission(explorers, "node");
