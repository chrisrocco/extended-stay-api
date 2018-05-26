import {Route} from "../routing/route-builder";

export const pingRoute: Route = {
    method: 'get',
    path: '/ping',
    controller: async () => ({ msg: 'pong' })
}
