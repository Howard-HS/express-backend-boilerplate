const NODE_ENV = process.env.NODE_ENV

// Load in environment variables
// Visit dotenv for more configuration settings
require('dotenv').config({
    path: `./src/config/${NODE_ENV}.env`
})

const express = require('express')
const app = express()
const {
    port
} = require('../src/config/default')

// Bring in database connection
try {
    console.log('Attempting to establish database connection...')
    require('./services/database')
} catch (err) {
    throw err
}

// Setup morgan to log all incoming requests
// Currently morgan is set to be active while in development mode, this can be changed
if (NODE_ENV === 'development') {
    const morgan = require('morgan')
    app.use(morgan('combined'))
}

app.set('PORT', port)

// Import modules here
require('./modules/index').modules(app)

// Export app to server.js
module.exports = app