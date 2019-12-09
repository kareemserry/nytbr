const Discord = require('discord.js');

const logger = require('../common/logger')(module.filename);
const consts = require('../common/consts');


const messageHandler = require('./message-handler');

const client = new Discord.Client();

const profile = consts.envs.profile;
const token = consts.envs.token;
const ours = consts.utils.ours;

client.on('ready', () => {
    logger.info(`Discord Bot Ready! Profile: ${profile}`);
    client.user.setActivity(`${consts.utils.ours.prefixShort} help`);
});

client.on('message', (msg) => {
    if (msg.author.id === client.user.id) {
        return;
    }

    if (ours(msg)) {
        messageHandler.handle(msg).catch((err) => {
            logger.error(err.stack);
        });
    }
});

client.login(token);

module.exports = {
    Discord
}