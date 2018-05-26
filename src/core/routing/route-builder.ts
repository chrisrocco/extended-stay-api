import {Route} from "./Route";

export const useRoute = (router, route: Route) => {

    // pad the validators array
    if(!route.validators) route.validators = []

    // set a default mapper function
    // identity function... almost
    if(!route.mapper) route.mapper = I => ({ I })

    return router[route.method](

        route.path,

        ...route.validators,

        (request, ressponse, next) =>
            route.controller(route.mapper(request))
                .then(ressponse.json)
                .catch(next)
    )
}
