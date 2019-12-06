const axios = require('axios');

const logger = require('../common/logger')(module.filename);
const consts = require('../common/consts');
const util = require('util');

const Urls = {
    backendUrl: `${consts.envs.backendUrl}`,

};

const backendUrl = axios.create({ baseURL: Urls.backendUrl });


module.exports = {
    backendUrl
};