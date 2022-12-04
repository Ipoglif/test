const { ServiceBroker } = require('moleculer')
const ApiService = require('moleculer-web')

const cookieParser = require('cookie-parser')

const handle = require('./app/handlers')
const { authMiddleware } = require('./app/middleware')

const broker = new ServiceBroker({
    logger: console
})

broker.createService({
    name: 'serv',

    mixins: [ApiService],
    actions: handle(broker).action,

    settings: {
        port: 3002,
        use: [ cookieParser() ],

        cors: {
          origin: '*',
          methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
          allowedHeaders: [],
          exposedHeaders: [],
          credentials: false,
          maxAge: 3600
        },

      routes: [{
          aliases: {
              'GET test' : [
                  // authMiddleware,
                  'serv.check',
              ],
          }

      }],
    },

})

broker.start()
    .then(()=>console.log('Service Started'))