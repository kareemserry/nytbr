const express = require('express');
const consts = require('../common/consts');
const logger = require('../common/logger')(module.filename);
const auth = require("./routes/auth");
const bodyParser = require("body-parser");




express.json({ strict: true });
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/users", auth);

app.use('/*', (req, res) => {
    res.status(404).send("not found");
});

app.listen(consts.envs.backendPort, () => {
    logger.info(`Server up and running on port ${consts.envs.backendPort}`);
});

