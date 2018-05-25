export const getConfig = env => ({



    mysql: {
        host: env.MYSQL_HOST || 'localhost',
        user: env.MYSQL_USER || 'root',
        pass: env.MYSQL_PASS || 'secret',
        db: env.MYSQL_DB || 'staypoints',
        port: env.MYSQL_PORT || 3306,
        logging: env.MYSQL_LOGGING || true
    }



})
