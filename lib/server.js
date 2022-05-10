const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
//const explorers = require("./../explorers.json");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

//endpoint para recibir un parámetro por query params, y regresar la lista de explorers filtrados por el parámetro.

app.get("/v1/explorers/:mission", (req, res) => {
    const exploradoresDeControllers = ExplorerController.getExplorersByMission(
        req.params.mission
    );
    res.status(200).json(exploradoresDeControllers);
});

//endpoint para regresar la cantidad de explorers segun la mision

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission =
    ExplorerController.getExplorersAmountByMission(mission);
    response.json({
        mission: request.params.mission,
        quantity: explorersAmountInMission,
    });
});

//endpoint para regresar la lista de usernames de explorers segun la mision

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernamesMission =
    ExplorerController.getExplorersUsernamesByMission(mission);
    res.status(200).json(explorersUsernamesMission);
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = parseInt(request.params.score);
    const fizzbuzzTrick = ExplorerController.applyFizzbuzz(score);
    response.json({ score: score, trick: fizzbuzzTrick });
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
