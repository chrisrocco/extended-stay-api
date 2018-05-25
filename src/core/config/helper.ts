import * as lodash from 'lodash'

export const getConfigHelper = (config) => (key) => lodash.get(config, key)