var config = {}

// Update to have your correct username and password
config.mongoURI = {
    // production: 'mongodb+srv://Molline:molly123@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://Molline:molly123@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://Molline:molly123@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    production:'mongodb+srv://Molline:molly123@cluster0.jgdnqqi.mongodb.net/darkroom?retryWrites=true&w=majority',
    development:'mongodb+srv://Molline:molly123@cluster0.jgdnqqi.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test:'mongodb+srv://Molline:molly123@cluster0.jgdnqqi.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
