const consts = require('../common/consts');
const logger = require('../common/logger')(module.filename);

const handlers = require('./handlers/index');


const handle = async (msg) => {
    logger.info(`Recieved Message [${msg.id}]: '${msg.author.tag}: ${msg.content}'`);

    const args = msg.content.split(' ');

    if (args.length < 2) {
        await handlers.lost(msg.channel);
        return;
    }

    const args2 = args.slice(2, args.length);

    switch (args[1]) {
        case consts.prefixes.help:
            await handlers.help(args2, msg.channel); break;
        case consts.prefixes.link:
            await handlers.linkProfile(msg); break;
        default: await handlers.lost(msg.channel); break;
    }

};

exports.handle = handle;