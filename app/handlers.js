module.exports = (broker) => {
    return {
        action: {
            'check': {
                async handler(ctx) {

                    broker.call('auth.login', {email: 'asdas', password:'asddas', user_name: 'asdasd'})
                    console.log('testttt --> ')

                    return 'test'
                }
            },
        }
    }
}