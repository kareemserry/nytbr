const logger = require('../../common/logger')(module.filename);
const consts = require('../../common/consts');
const help = require('./help');
const api = require('../api');
const Discord = require('discord.js');

const books = async (args, channel) => {
    switch (args.length) {
        case 0: await handleBooks(channel, Discord); break;
        default: await channel.send(help.getHelpMessage(consts.prefixes.books)); break;
    }
};

const handleBooks = async (channel) => {
    const bookData = (await api.backend.get('/books')).data;
    const fiction = bookData.fiction;
    const nonFiction = bookData.nonFiction;

    await channel.send('Top 15 Fiction Books:\n');
    await handleBooksHelper(fiction, channel);
    await channel.send('Top 15 Non-Fiction Books:\n');
    await handleBooksHelper(nonFiction, channel);
};

const handleBooksHelper = async (books, channel) => {
    books.forEach(async (book) => {
        try {
            const bookEmbed = new Discord.RichEmbed()
                .setColor(book.rank % 2 == 0 ? consts.discordTheme.lightColor : consts.discordTheme.darkColor)
                .setTitle(book.title)
                .setURL(book.amazon_product_url)
                .setDescription(book.description)
                .setThumbnail(book.book_image)
                .addField('Rank', book.rank)
                .addField('Author', book.author);
            await channel.send(bookEmbed);
        } catch (err) {
            logger.warn(`something went wrong while building embeds at ${book}`);
        }
    });
};
module.exports = books;
