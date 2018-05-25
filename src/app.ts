import express, {Request, Response} from 'express'
import {openDBConnection} from "./core/database/open-connection";

/**
 * COMPOSITION ROOT
 * =========================
 */

const getApp = async (config) => {

    const dbConnection = await openDBConnection(config)

    const app = express()

    app.get('/ping', (request: Request, response: Response) => response.send('pong'))

    return app
}

export { getApp }