import request from 'supertest'
import dotenv from 'dotenv'
import {getConfigHelper} from "../src/core/config/helper";
import {getConfig} from "../src/_config";
import {getApp} from "../src/app";

dotenv.config()
const config = getConfigHelper(getConfig(process.env))
const app$ = getApp(config)



const properties = [
    {
        displayName: 'Chris Rocco House',
        lat: 1234,
        lng: 8765,
        city: 'Birmingham',
        state: 'AL',
        zip: 35205,
        phone: 2056396666
    }
]

test('properties endpoint test', async () => {
    let app = await app$

    let response = await request(app).post('/properties')
        .send({ properties })
    expect(response.statusCode).toBe(200)
})

test('Delete property', async () => {
    let app = await app$

    let res = await request(app).delete('/properties/99')
    expect(res.statusCode).toBe(404)
})

test('list properties', async () => {
    let app = await app$

    let response = await request(app).get('/properties')
    expect(response.statusCode).toBe(200)
})

test('update properties', async () => {
    let app = await app$
    let response = await request(app)
        .put('/properties/1')
        .send({ ...properties[0], displayName: 'Updated!' })
    expect(response.statusCode).toBe(200)

    let badResponse = await request(app)
        .put('/properties/999999999')
        .send({})
    expect(badResponse.statusCode).toBe(404)

    let body = properties[0]
    delete body.displayName
    let badSchema = await request(app)
        .put('/properties/1')
        .send(body)

    expect(badSchema.statusCode).toBe(400)
})