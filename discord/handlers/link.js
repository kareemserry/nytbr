const logger = require("../../common/logger")(module.filename);
const consts = require("../../common/consts");
const help = require("./help");
const api = require("../api");
const Discord = require("discord.js");

const link = async (args, msg) => {
  switch (args.length) {
    case 0:
      await msg.channel.send(
        `Login through our webpage *${consts.envs.frontendFullUrl}/login*\nThen click this link!\t*${consts.envs.frontendFullUrl}/linkDiscord/${msg.author.id}*`
      );
      break;
    default:
      await msg.channel.send(help.getHelpMessage(consts.prefixes.link));
      break;
  }
};

module.exports = link;
