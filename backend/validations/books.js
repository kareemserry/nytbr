const Joi = require("joi");

module.exports = {
    favouritesValidation: request => {
        const schema = {
            isbn: Joi.string().required()
        };
        return Joi.validate(request, schema);
    }
};