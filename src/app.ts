import express from 'express'
import {openDBConnection} from "./core/database/open-connection";
import {addRoute} from "./core/routing/route-builder";
import bodyParser = require("body-parser");

import {deleteProperty} from "./properties/routes/property.delete";
import {createProperty} from "./properties/routes/property.create";
import {updateProperty} from "./properties/routes/property.update";
import {listProperties} from "./properties/routes/property.list";

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

    // load the routes
    let routeObjects = [
        listProperties({connection}),
        deleteProperty({connection}),
        createProperty({connection}),
        updateProperty({connection})
    ]

    routeObjects.forEach( route => addRoute(app, route) )

    app.get('/ping', (_, r) => r.send('pong'))

    return app
}

export { getApp }
