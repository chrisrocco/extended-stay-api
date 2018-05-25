import express, {Request, Response} from 'express'
import dotenv from 'dotenv'

export default async () => {
    const app = express()

    app.get('ping', (request: Request, response: Response) => response.send('Pong!'))

    return app
}