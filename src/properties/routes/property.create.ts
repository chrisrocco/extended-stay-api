import {Property} from "../entities/Property";
import {validateBody} from "../../core/validation/schema";
import {createSchema} from "../validation/property.schema";
import {Route} from "../../core/routing/Route";

export const createProperty = ({ connection }): Route => ({

    name: 'Create Property',

    method: 'post',

    path: '/properties',

    validators: [
        validateBody(createSchema)
    ],

    mapper: req => req.body,

    controller: async ({ properties }) =>

        await connection
            .getRepository(Property)
            .save(properties)


})
