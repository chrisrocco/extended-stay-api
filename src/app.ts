import express, {Request, Response} from 'express'
import {openDBConnection} from "./core/database/open-connection";
import {PropertiesRouter} from "./properties/routes";

/**
 * COMPOSITION ROOT
 * =========================
 */

const getApp = async (config) => {

    const dbConnection = await openDBConnection(config)


    const propertyRouter = PropertiesRouter(config)

    const app = express()

    app.use(propertyRouter)
    app.get('/ping', (request: Request, response: Response) => response.send('pong'))

    return app
}

export { getApp }
