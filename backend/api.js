const axios = require('axios');

const logger = require('../common/logger')(module.filename);
const consts = require('../common/consts');
const util = require('util');

const Urls = {
    nytimesFiction: 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction?api-key=' + consts.envs.nytKey,
    nytimesNonFiction: 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction?api-key=' + consts.envs.nytKey
};

const nytimesFiction = axios.create({ baseURL: Urls.nytimesFiction });
const nytimesNonFiction = axios.create({ baseURL: Urls.nytimesNonFiction });

module.exports = {
    nytimesFiction,
    nytimesNonFiction
};