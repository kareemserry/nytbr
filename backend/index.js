const express = require('express');
const consts = require('../common/consts');
const logger = require('../common/logger')(module.filename);
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const session = require('express-session');
express.json({ strict: true });
const app = express();

app.use(session({
    secret: consts.envs.apiKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", routes.auth);

app.use('/*', (req, res) => {
    res.status(404).send("Not Found");
});

app.listen(consts.envs.backendPort, () => {
    logger.info(`Server up and running on port ${consts.envs.backendPort}`);
});

