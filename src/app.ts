import express, {Request, Response} from 'express'

export const getApp = async (config) => {

    const app = express()

    app.get('ping', (request: Request, response: Response) => response.send('Pong!'))

    return app
}