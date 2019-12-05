const axios = require('axios');

const logger = require('../common/logger')(module.filename);
const consts = require('../common/consts');
const util = require('util');

const Urls = {
    backend: consts.envs.backendUrl
};

const backend = axios.create({ baseURL: Urls.backend });

module.exports = {
    backend
};