import {Route} from "../../core/routing/route-builder";
import {validateExists} from "../../core/validation/exists";
import {Property} from "../entities/Property";
import {validateBody} from "../../core/validation/schema";
import {propSchema} from "../validation/property.schema";

export const updateProperty = ({ connection }): Route => ({

    name: 'UPDATE PROPERTY',


    method: 'put',


    route: '/properties/:id',


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
