import express, {Request, Response} from 'express'

/**
 * COMPOSITION ROOT
 * =========================
 */

const getApp = async (config) => {

    const app = express()

    app.get('/ping', (request: Request, response: Response) => response.send('pong'))

    return app
}

export { getApp }