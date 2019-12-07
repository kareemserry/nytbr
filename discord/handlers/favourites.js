const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts');
const help = require('./help')
const api = require('../api')
const Discord = require('discord.js')

const favourites = async (args, user, channel) => {
    switch (args.length) {
        case 0: await getFavourites(user, channel); break;
        default: await channel.send(help.getHelpMessage(consts.prefixes.favourites)); break;
    }
};

const getFavourites = async (user, channel) => {
    const bookData = (await api.backend.get('/discord/books/fav', { params: { secret: consts.envs.secret, discordID: user.id } })).data;

    await channel.send('Your Favourites:\n');
    await sendFavourites(bookData, channel);
};

const sendFavourites = async (books, channel) => {
    books.forEach(async (book, pos) => {
        try {
            const shortendDesc = book.description.length > 1024 ? book.description.substring(0, 1020) + " ..." : book.description;
            const bookEmbed = new Discord.RichEmbed()
                .setColor(pos % 2 == 0 ? consts.discordTheme.lightColor : consts.discordTheme.darkColor)
                .setTitle(book.title)
                .setURL(book.previewLink)
                .addField('subtitle', book.subtitle)
                .addField('description', shortendDesc)
                .setThumbnail(book.imageLinks.thumbnail)
                .addField('Author(s)', book.authors.join(' - '));
            await channel.send(bookEmbed);
        } catch (err) {
            logger.warn(`something went wrong while building embeds at ${JSON.stringify(book)}`);
            logger.debug(err);
        }
    });
};
module.exports = favourites;
