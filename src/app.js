const NODE_ENV = process.env.NODE_ENV

// Load in environment variables
require('dotenv').config({
    path: `./src/config/${NODE_ENV}.env`
})

const express = require('express')
const app = express()
const { port } = require('../src/config/default')

try {
    console.log('Attempting to establish database connection...')
    require('./services/database')
} catch (err) {
    throw err
}

app.set('PORT', port)


require('./modules/index').modules(app)

module.exports = app