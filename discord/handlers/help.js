const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts');
const util = require('util');

const helpMessage = '>>>' +
    ' `!nytbr help`\n\tReturns list of available NYT\'s Bestreads commands' + '\n\n' +
    ' `!nytbr help <command>`\n\tReturns detailed discription of command' + '\n\n' +
    ' `!nytbr books`\n\tReturns best selling books' + '\n\n' +
    ' `!nytbr link`\n\tLets you link your discord account to your NYTBR account' + '\n\n' +
    ' `!nytbr favourites`\n\tGets your favourite books. Requires a linked account';


// ~ts help || ~ts help <command>
const help = async (args, channel) => {
    switch (args.length) {
        case 0: await channel.send(helpMessage); logger.info(`General help message sent at ${channel.type == 'dm' ? `DM : ${channel.recipient.username}` : `${channel.guild.name} : ${channel.name}`}`); break;
        case 1: await channel.send(getHelpMessage(args[0])); logger.info(`<${args[0]}> help message sent at ${channel.type == 'dm' ? `DM : ${channel.recipient.username}` : `${channel.guild.name} : ${channel.name}`}`); break;
        default: await channel.send(helpMessage); break;
    }
};

const helpMap =
{
    help: '>>> No one can help you here ...',
    other: '>>> <command> is not a valid command.',
    link: '>>> `!nytbr link`\n\tclick the provided link to connect your accounts\n' +
        '\t\tExample: *!nytbr link*',
    books: '>>> `!nytbr books`\n\treturns top 30 fiction and non-fiction current best selling books',
    favourites: '>>> `!nytbr favourites`\n\treturn your favourite books.'
}

const getHelpMessage = (command) => {
    if (Object.values(consts.prefixes).includes(command)) {
        return helpMap[command];
    } else {
        return helpMap.other.replace('<command>', `\`${command}\``);
    }
};

module.exports = help;
module.exports.getHelpMessage = getHelpMessage;