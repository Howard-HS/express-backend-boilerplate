const app = require('./src/index')
const PORT = app.get('PORT')

app.listen(PORT, (err) => {
    if (!err) console.log('Express server listening on port: ' + PORT)
    else throw err
})