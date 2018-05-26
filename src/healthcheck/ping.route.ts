import {Route} from "../core/routing/Route";

export const pingRoute: Route = {
    method: 'get',
    path: '/ping',
    controller: async () => ({ msg: 'pong' })
}
