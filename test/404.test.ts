import request from 'supertest'
import express from 'express'
import {NotFoundError} from "../src/core/errors/NotFoundError";
import {handleAppErrors} from "../src/core/errors/handler";

test('custom error class and handler test', async () => {
    const app = express()

    app.use('/404', (req, res) => {
        throw new NotFoundError('Resource Not Found')
    })

    app.use(handleAppErrors)

    let response = await request(app).get('/404')
    expect(response.statusCode).toBe(404)
})
