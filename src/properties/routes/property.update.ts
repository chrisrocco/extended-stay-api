import {validateExists} from "../../core/validation/exists";
import {Property} from "../entities/Property";
import {validateBody} from "../../core/validation/schema";
import {propSchema} from "../validation/property.schema";
import {Route} from "../../core/routing/Route";

export const updateProperty = ({ connection }): Route => ({

    name: 'UPDATE PROPERTY',

    method: 'put',

    path: '/properties/:id',

    validators: [
        validateExists(connection)('id', 'id', Property),
        validateBody(propSchema)
    ],

    mapper: req => ({ property: req.body, ...req.params }),

    controller: async ({ id, property }) =>
        await connection
            .getRepository(Property)
            .update(id, property)

})
