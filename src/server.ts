import dotenv from 'dotenv'
import "reflect-metadata" // shim

import {getApp} from "./app";
import {getConfigHelper} from "./core/config/helper";
import {getConfig} from "./_config";

dotenv.config()
const config = getConfigHelper(getConfig(process.env))
const app$ = getApp(config)

const startServer = async () => {
    let app = await app$
    app.listen(8000, () => console.log('app listening on port 8000'))
}

const server$ = startServer()

export { server$ }