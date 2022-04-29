//

class ExplorerService {
  static filterByMission(explorers, mission) {
    const explorersByMission = explorers.filter(
      (explorer) => explorer.mission === mission
    );
    return explorersByMission;
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    const explorerAmount = explorers.filter(
      (explorer) => explorer.mission === mission
    );
    return `la cantidad de explorers son :${explorerAmount.length}`;
  }

  static getExplorersUsernamesByMission(explorers, mission) {}
}

module.exports = ExplorerService;
