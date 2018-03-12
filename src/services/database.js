const mongoose = require('mongoose')
const {
    dbUrl
} = require('../config/default')

mongoose.Promise = global.Promise

mongoose.connect(dbUrl)

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected')
})

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error! Reason:\n' + err)
    process.exit(1)
})

mongoose.connection.on('disconnected', () => {
    console.log('\nMongoose disconnected')
})

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log('Mongoose disconnected through ' + msg)
        callback()
    })
}

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2')
    })
})

process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0)
    })
})

process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app termination', () => {
        process.exit(0)
    })
})

//Import models here
