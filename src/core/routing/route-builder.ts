import {NextFunction, Request, Response} from "express";

type Handler = (request: Request, response: Response, next: NextFunction) => Promise<any>

type Controller = (object) => Promise<object>

export type Route = {
    name?: string
    method: 'post' | 'put' | 'delete' | 'get'
    route: string
    validators?: Handler[]
    mapper?: (req: Request) => object
    controller: Controller
}

let attempt = (mapper, controller) => (req, res) =>
    controller(mapper(req))
        .then( data => res.json(data) )
        .catch( err => res.status(500).json({err}))

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