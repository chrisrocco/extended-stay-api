import express from 'express'
import {openDBConnection} from "./core/database/open-connection";
import {propertyRoutes} from "./properties/routes";
import {addRoute} from "./core/routing/route-builder";
import bodyParser = require("body-parser");

/**
 * COMPOSITION ROOT
 * =========================
 */

const getApp = async (config) => {

    // open database connection
    const connection = await openDBConnection(config)

    // bootstrap the app
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser({ extended: true }))

    let routes = [
        ...propertyRoutes({ connection })
    ]

    routes.forEach( route => addRoute(app, route) )

    app.get('/ping', (_, r) => r.send('pong'))

    return app
}

export { getApp }
