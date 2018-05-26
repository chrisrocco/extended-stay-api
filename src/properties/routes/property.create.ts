import {Route} from "../../core/routing/route-builder";
import {Property} from "../models/Property";
import {validateBody} from "../../core/validation/schema";
import {createSchema} from "../validation/property.schema";

export const createProperty = ({ connection }): Route => ({

    name: 'Create Property',


    method: 'post',


    route: '/properties',


    validators: [
        validateBody(createSchema)
    ],


    mapper: req => req.body,


    controller: async ({ properties }) =>
        await connection
            .getRepository(Property)
            .save(properties)


})
