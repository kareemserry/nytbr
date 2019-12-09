const Joi = require("joi");

module.exports = {
    discordValidation: request => {
        const schema = {
            discordID: Joi.string().required()
        };
        return Joi.validate(request, schema);
    }
};