const port =  process.env.PORT || 3000
const host = process.env.HOST || `http://localhost:${port}`

module.exports = {
    transporter: {
        type: 'AMQP',
        options: {
            url: 'amqp://guest:guest@localhost:5672/',
            eventTimeToLive: 5000,
            prefetch: 1
        }
    },
    api: {
        swagger: {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'Blog API',
                    description: 'Blog API Methods',
                    version: '1.0.1'
                },
                servers: [{
                    url: host
                }]
            },
            apis: ['app/swagger.js']
        },
    },
    secret: {
        access: process.env.JWT_ACCESS_SECRET || 'SERVER_SECRET_KEY',
        refresh: process.env.JWT_REFRESH_SECRET || 'SERVER_REFRESH_SECRET_KEY'
    },
    connections: {
        mysql: {
            host: process.env.MYSQL_HOST,
            port: process.env.MYSQL_PORT,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        },
    },
    options: {
        cors: {
            origin: true,
            credentials: true
        },
    },
    port,host
}
