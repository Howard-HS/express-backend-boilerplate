const HomeController = require('../controllers/home.controller')

module.exports = app => {
    app.route('/').get(HomeController.getHomePage)
}