const Joi = require('joi')

export const validateBody = (schema) => async (req, res, next) => {
    const result = Joi.validate(req.body, schema, {
        allowUnknown: true
    })
    if(result.error) return res.status(400).json({ errors: result.error })
    next()
}