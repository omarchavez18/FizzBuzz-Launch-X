const ExplorerService = require("./../services/ExplorersService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("../explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("../explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("../explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyFizzbuzz(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;
