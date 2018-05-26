import {Handler, Request} from "express";

export interface Route {
    name?: string
    method: 'post' | 'put' | 'delete' | 'get'
    path: string
    validators?: Handler[]
    mapper?: (req: Request) => object
    controller: (object) => Promise<object>
}
