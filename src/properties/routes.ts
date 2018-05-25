import express from 'express'
import {PropertiesController} from "./controller";

export const PropertiesRouter = (config) => {

    const ctrl = PropertiesController(config)

    const router = express.Router()

    router.post('/properties', ctrl.addListing)
    router.delete('/properties/:id', ctrl.removeListing)

    return router
}