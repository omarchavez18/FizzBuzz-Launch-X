//

class ExplorerService {
    // te muestra los usuarios que estan en node
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter(
            (explorer) => explorer.mission === mission
        );
        return explorersByMission;
    }

    //metodo para ver la cantidad de usuarios en cierta mission en este caso "node"
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorerAmount = explorers.filter(
            (explorer) => explorer.mission === mission
        );
        return `la cantidad de explorers son :${explorerAmount.length}`;
    }

    //metodo para ver los nombres de los usuarios
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersUsernamesByMission = explorers.filter(
            (explorer) => explorer.mission == mission
        );
        const usernames = explorersUsernamesByMission.map(
            (explorer) => explorer.githubUsername
        );
        return usernames;
    }
}

module.exports = ExplorerService;
