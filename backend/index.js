const express = require('express');
const mongo = require('../common/mongo');
const consts = require('../common/consts');
const logger = require('../common/logger')(module.filename);

express.json({ strict: true });
const app = express();

app.use('/*', (req, res) => {
    res.status(404).send("not found");
});

app.listen(consts.envs.backendPort, () => {
    logger.info(`Server up and running on port ${consts.envs.backendPort}`);
});