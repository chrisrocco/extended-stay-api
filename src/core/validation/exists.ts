export const validateExists = connection => (reqProp, modelProp, modelRef) => async (req, res, next) => {
    let id = req.body[reqProp]
    if(!id) id = req.params[reqProp]

    let model = await connection.getRepository(modelRef).findOne({ [modelProp]: id })
    if(!model) return res.status(404).json({ msg: 'Resource Not Found' })
    next()
}