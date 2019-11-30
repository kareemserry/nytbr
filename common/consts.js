const prefix = '!nytbr';
const prefixShort = '!nb';

const profiles = {
    production: 'prod',
    development: 'dev'
};

const prefixes = {
    help: 'help',
    favorites: 'favorites',
    link: 'link',
    top: 'top',
    info: 'info'
};

const ours = (msg) => {
    var msgPrefix = msg.content.split(' ')[0].toLowerCase();
    return msgPrefix === prefix || msgPrefix === prefixShort;
};

const env = process.env;
var envs = {
    profile: env.NYTBR_PROFILE,
    helpMessage: env.NYTBR_HELP_MESSAGE,
    helpMap: env.NYTBR_HELP_MAP,
    logLevel: env.NYTBR_LOG_LEVEL,
    dbString: env.NYTBR_DB_CON,
    token: env.NYTBR_DISCORD_TOKEN,
    backendUrl: env.NYTBR_BACKEND_URL
};

const isDev = () => {
    return envs.profile !== profiles.production;
};

const utils = {
    ours,
    isDev
};

utils.ours.prefix = prefix;
utils.ours.prefixShort = prefixShort;

const emoji = {
    thumbsUp: '👍🏼',
    eye: '👁'
};

module.exports = {
    profiles,
    prefixes,
    utils,
    envs,
    emoji
};
