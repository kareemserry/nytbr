const Joi = require("joi");

module.exports = {
    favouritesValidation: request => {
        const schema = {
            isbn: Joi.string().required()
        };
        return Joi.validate(request, schema);
    },

    discordFavoritesGetValidation: request => {
        const schema = {
            secret: Joi.string().required(),
            discordID: Joi.string().required()
        };
        return Joi.validate(request, schema);
    },
    discordFavoritesEditValidation: request => {
        const schema = {
            isbn: Joi.string().required(),
            secret: Joi.string().required(),
            discordID: Joi.string().required()
        };
        return Joi.validate(request, schema);
    }
};