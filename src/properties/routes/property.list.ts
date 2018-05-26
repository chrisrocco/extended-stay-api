import {Property} from "../entities/Property";
import {Route} from "../../core/routing/Route";

export const listProperties = ({ connection }): Route => ({

    name: 'LIST PROPERTIES',

    method: 'get',

    path: '/properties',

    controller: async () =>
        await connection
            .getRepository(Property)
            .find()

})
