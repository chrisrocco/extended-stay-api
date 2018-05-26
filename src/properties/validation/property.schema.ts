const Joi = require('joi')

export const propSchema = {
    displayName: Joi.string().required()
}

export const createSchema = {
    properties: Joi.array().items(propSchema)
}