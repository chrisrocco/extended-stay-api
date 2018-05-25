import request from 'supertest'
import dotenv from 'dotenv'
import {getConfigHelper} from "../src/core/config/helper";
import {getConfig} from "../src/_config";
import {getApp} from "../src/app";

dotenv.config()
const config = getConfigHelper(getConfig(process.env))
const app$ = getApp(config)

test('healthcheck endpoint test', async () => {
    let app = await app$

    request(app).get('/ping').then( response => {
        expect(response.statusCode).toBe(200)
    })
})
