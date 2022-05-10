const express = require("express");
const ExplorerService = require("./../lib/services/ExplorersService");
const explorers = require("./../explorers.json");
const FizzbuzzService = require("./../lib/services/FizzbuzzService");
const app = express();

app.use(express.json());

//puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

app.get("/v1/explorers/:mission", (req, res) => {
    const exploradores = ExplorerService.filterByMission(
        explorers,
        req.params.mission
    );

    res.status(200).json(exploradores);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const cantidadExplorers = ExplorerService.getAmountOfExplorersByMission(
        explorers,
        req.params.mission
    );
    res.status(200).json(cantidadExplorers);
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const nombresDeUsuarios = ExplorerService.getExplorersUsernamesByMission(
        explorers,
        req.params.mission
    );
    res.status(200).json(nombresDeUsuarios);
});

//esta fallando
app.get("/v1/explorers/:id", (req, res) => {
    const respuestaFizzBuzz = FizzbuzzService.applyValidationInExplorer(
        explorers[req.params.id]
    );
    res.status(200).json(respuestaFizzBuzz);
});

app.listen(port, () => {
    console.log("server listo!");
});
