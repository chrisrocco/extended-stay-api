import {Route} from "../core/routing/route-builder";
import {Property} from "./models/Property";
import {validateExists} from "../core/validation/exists";
import {validateBody} from "../core/validation/schema";

const Joi = require('joi')

const propSchema = {
    displayName: Joi.string().required()
}

const createSchema = {
    properties: Joi.array().items(propSchema)
}

export const propertyRoutes = ({ connection }): Route[] => ([

    {
        name: 'Create Properties',
        method: 'post',
        route: '/properties',
        validators: [
            validateBody(createSchema)
        ],
        mapper: req => req.body,
        controller: async ({ properties }) =>
            await connection.getRepository(Property).save(properties)
    },

    {
        name: 'List Properties',
        method: 'get',
        route: '/properties',
        controller: async () =>
            await connection.getRepository(Property).find()
    },

    {
        name: 'Update Property',
        method: 'put',
        route: '/properties/:id',
        validators: [
            validateExists(connection)('id', 'id', Property),
            validateBody(propSchema)
        ],
        mapper: req => ({ property: req.body, ...req.params }),
        controller: async ({ id, property }) =>
            await connection.getRepository(Property).update(id, property)
    }

])
