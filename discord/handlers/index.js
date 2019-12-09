const logger = require("../../common/logger")(module.filename);
const util = require("util");
const consts = require("../../common/consts");
const help = require("./help");
const books = require("./books");
const favourites = require("./favourites");
const linkProfile = require("./link");

const lost = async channel => {
  await channel.send(`????? Use: \`${consts.utils.ours.prefix} help\``);
  logger.info(
    `lost message sent at ${
      channel.type == "dm"
        ? `DM : ${channel.recipient.username}`
        : `${channel.guild.name} : ${channel.name}`
    }`
  );
};

const stats = async msg => {
  if (msg.author.id === "267420761516539904") {
    guilds = "";
    msg.client.guilds.forEach(
      guild => (guilds = guilds.concat("\t" + guild.name + "\n"))
    );
    await msg.reply(`\n>>> Servers:\n${guilds}\n${msg.client.guilds.size}`);
  } else {
    logger.info("Unauthorized use of owner commands!");
  }
};

module.exports = {
  help,
  lost,
  stats,
  books,
  favourites,
  linkProfile
};
