export const getConfig = env => ({



    mysql: {
        host: env.MYSQL_HOST,
        user: env.MYSQL_USER || '',
        pass: env.MYSQL_PASS || '',
        db: env.MYSQL_DB
    }



})
