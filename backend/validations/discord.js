const Joi = require("joi");

module.exports = {
    discordValidation: request => {
        const registerSchema = {
            discordID: Joi.string().required()
        };
        return Joi.validate(request, registerSchema);
    }
};