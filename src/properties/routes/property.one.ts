import {Property} from "../entities/Property";
import {Route} from "../../core/routing/Route";
import {validateExists} from "../../core/validation/exists";

export const getProperty = ({ connection }): Route => ({

    name: 'ONE PROPERTIE',

    method: 'get',

    path: '/properties/:id',

    validators: [
        validateExists(connection)('id', 'id', Property)
    ],

    mapper: (req) => req.params,

    controller: async ({ id }) =>
        await connection
            .getRepository(Property)
            .findOneOrFail({ id })

})
