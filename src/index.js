const NODE_ENV = process.env.NODE_ENV

// Load in environment variables
require('dotenv').config({
    path: `./src/config/${NODE_ENV}.env`
})

const express = require('express')
const app = express()
const {
    port
} = require('../src/config/default')

app.set('PORT', port)

app.route('/').get((req, res) => {
    res.json({
        message: 'Setup successful!'
    })
})

module.exports = app