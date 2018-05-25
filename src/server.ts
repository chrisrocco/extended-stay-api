import dotenv from 'dotenv'
import {getConfigHelper} from "./core/config/helper";
import {getConfig} from "./_config";
import {getApp} from "./app";

const startServer = async () => {

    dotenv.config()
    const config = getConfigHelper(getConfig(process.env))

    let app = await getApp(config)

    app.listen(8000, () => console.log('app listening on port 8000'))
}

startServer()

export { startServer }