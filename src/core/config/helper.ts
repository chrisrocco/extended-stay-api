import * as lodash from 'lodash'

export const getConfigHelper = (config) => (key) => {
    let V = lodash.get(config, key)
    if(V === null) throw new Error("Invalid config value accessed: " + key)
    return V
}