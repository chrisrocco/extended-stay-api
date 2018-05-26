import {Route} from "../../core/routing/route-builder";
import {validateExists} from "../../core/validation/exists";
import {Property} from "../entities/Property";
import {Request} from "express";

export const deleteProperty = ({ connection }): Route => ({

    name: 'DELETE PROPERTY',


    method: 'delete',


    route: '/properties/:id',


    validators: [
        validateExists(connection)('id', 'id', Property)
    ],


    mapper: (request: Request) => request.params,


    controller: async ({ id }) => {

        return await connection
            .getRepository(Property)
            .delete(id)

    }


})
