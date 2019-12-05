const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts');
const help = require('./help')
const api = require('../api')
const util = require('util');

// ~ts help || ~ts help <command>
const books = async (args, channel) => {
    logger.debug(util.inspect(books))
    switch (args.length) {
        case 0: await channel.send(JSON.stringify((await api.backend.get('/books')).data));
        default: await channel.send(help.getHelpMessage("books")); break;
    }
};

module.exports = books;
