const Joi = require("joi");

module.exports = {
    registerValidation: request => {
        const registerSchema = {
            email: Joi.string().email()
                .required()
                .error(errors => {
                    return {
                        message: "Email is not Valid"
                    };
                }),
            password: Joi.string().min(6).required(),
        };

        return Joi.validate(request, registerSchema);
    },
    loginValidation: request => {
        const loginSchema = {
            email: Joi.string().email()
                .required()
                .error(errors => {
                    return {
                        message: "Email is not Valid"
                    };
                }),
            password: Joi.string().min(6).required(),
        };

        return Joi.validate(request, loginSchema);
    },
};