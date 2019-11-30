const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts');
const util = require('util');

const helpMessage = consts.utils.isDev() ? '>>>' +
    ' `!nytbr help`\n\tReturns list of available TFT Stats commands' + '\n\n' +
    ' `!nytbr help <command>`\n\tReturns detailed discription of command' + '\n\n'
    : consts.envs.helpMessage;


// ~ts help || ~ts help <command>
const help = async (args, channel) => {
    switch (args.length) {
        case 0: await channel.send(helpMessage); logger.info(`General help message sent at ${channel.type == 'dm' ? `DM : ${channel.recipient.username}` : `${channel.guild.name} : ${channel.name}`}`); break;
        case 1: await channel.send(getHelpMessage(args[0])); logger.info(`<${args[0]}> help message sent at ${channel.type == 'dm' ? `DM : ${channel.recipient.username}` : `${channel.guild.name} : ${channel.name}`}`); break;
        default: await channel.send(helpMessage); break;
    }
};

const helpMap = consts.utils.isDev() ?
    {
        help: '>>> No one can help you here ...',
        other: '>>> <command> is not a valid command.',
        link: '>>> `!nytbr link`\n\tclick the provided link to connect your accounts\n' +
            '\t\tExample: *!nytbr link*',
    }
    : JSON.parse(consts.envs.helpMap);

const getHelpMessage = (command) => {
    if (Object.values(consts.prefixes).includes(command)) {
        return helpMap[command];
    } else {
        return helpMap.other.replace('<command>', `\`${command}\``);
    }
};

module.exports = help;
module.exports.getHelpMessage = getHelpMessage;