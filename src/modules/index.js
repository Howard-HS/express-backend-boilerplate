// Module based file structure inspired by MEAN stack

module.exports.modules = app => {
    // Import your modules here
    require('./home/routes/home.route')(app)
}