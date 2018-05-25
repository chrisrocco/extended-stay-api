import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import {getConfigHelper} from "./core/config/helper";
import {getConfig} from "./_config";

export default async () => {
    // SETUP CONFIG
    dotenv.config()
    const config = getConfigHelper(getConfig(process.env))

    const app = express()

    app.get('ping', (request: Request, response: Response) => response.send('Pong!'))

    return app
}