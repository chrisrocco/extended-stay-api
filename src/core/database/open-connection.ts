import {createConnection} from "typeorm";
import {entities} from "../../_entities";

export const openDBConnection = (config) => createConnection({
    type: 'mysql',
    host: config('mysql.host'),
    port: config('mysql.port'),
    username: config('mysql.user'),
    password: config('mysql.pass'),
    database: config('mysql.database'),
    entities: entities,
    synchronize: true,
    logging: config('mysql.logging'),
})
