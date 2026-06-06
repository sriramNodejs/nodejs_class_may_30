const Joi = require('joi');

const schemas = {
    createUser: {
        query: Joi.object({
            role: Joi.string().valid('admin', 'user').optional().messages({
                'string.base': 'role must be a type of text',
                'any.only': 'role must be either admin or user'
            })
        }),
        body: Joi.object({
            email: Joi.string().email().required().messages({
                'string.empty': 'email is required',
                'any.required': 'email is required',
                'string.email': 'please enter a valid email address'
            }),
            password: Joi.string().min(6).required().messages({
                'string.empty': 'password is required',
                'any.required': 'password is required',
                'string.min': 'password must be at least {#limit} characters long'
            })
        })
    }
}

module.exports = {
    schemas
}