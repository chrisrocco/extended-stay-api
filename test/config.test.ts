import {getConfigHelper} from "../src/core/config/helper";
import {getConfig} from "../src/_config";


test('config test', () => {

    let env = { MYSQL_HOST: 'localhost:1234' }
    let config = getConfigHelper(getConfig(env))

    expect(config('mysql.host')).toBe('localhost:1234')

})