import {Route} from "../../core/routing/route-builder";
import {Property} from "../entities/Property";

export const listProperties = ({ connection }): Route => ({

    name: 'LIST PROPERTIES',


    method: 'get',


    route: '/properties',


    controller: async () =>
        await connection
            .getRepository(Property)
            .find()


})
