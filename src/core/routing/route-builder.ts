import {Handler, NextFunction, Request, Response} from "express";

export type Route = {
    name?: string
    method: 'post' | 'put' | 'delete' | 'get'
    route: string
    validators?: Handler[]
    mapper?: (req: Request) => object
    controller: (object) => Promise<object>
}


let attempt = (mapper, controller) =>
    (req, res, next) =>
        controller(mapper(req))
            .then(res.json)
            .catch(next)


export const addRoute = (router, route: Route) => {

    // pad the validators array
    if(!route.validators) route.validators = []

    // set a default mapper function
    // identity function... because we still want the async error handler
    if(!route.mapper) route.mapper = I => I

    return router[route.method](
        route.route,
        ...route.validators,
        attempt(route.mapper, route.controller)
    )
}