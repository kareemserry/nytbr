const axios = require('axios');

const logger = require('../common/logger')(module.filename);
const consts = require('../common/consts');
const util = require('util');

const Urls = {
    nytimesFiction: 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction?api-key=' + consts.envs.nytKey,
    nytimesNonFiction: 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction?api-key=' + consts.envs.nytKey,
    goodreads: 'https://www.goodreads.com/search.xml?key=' + consts.envs.goodreadsKey,
    googleBooks: 'https://www.googleapis.com/books/v1'
};

const nytimesFiction = axios.create({ baseURL: Urls.nytimesFiction });
const nytimesNonFiction = axios.create({ baseURL: Urls.nytimesNonFiction });
const goodreads = axios.create({ baseURL: Urls.goodreads });
const googleBooks = axios.create({ baseURL: Urls.googleBooks });

module.exports = {
    nytimesFiction,
    nytimesNonFiction,
    goodreads,
    googleBooks
};