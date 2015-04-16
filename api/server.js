var express = require('express')
  , bunyan = require('bunyan')

  // Load configurations
  , Properties = require('./properties')
  , properties = new Properties()

  // Configure logger
  , logger = bunyan.createLogger({name: 'A game of tea'})

  , pusher = require('./lib/pusher')(properties)

// Bootstrap pusher connection
pusher.bootstrap(function(pusher) {

  // Group options
  var options =
    { logger: logger
    , properties: properties
    , pusher: pusher
    , games: require('./lib/game')()
    , users: require('./lib/user')()
    , session: properties.session
    }

  var app = express()

  // Express settings
  require('./app')(app, logger, properties)

  // Bootstrap routes
  require(__dirname + '/app/controllers/game')(app, options)
  require(__dirname + '/app/controllers/user')(app, options)
  require(__dirname + '/app/controllers/auth')(app, options)

  // Catch all routes
  app.get('*', function(req, res){
    res.status('404').end()
  })

  logger.info('Starting tea game on port ' + properties.port)
  // Start the app by listening on <port>
  app.listen(properties.port)

  // Expose server
  exports = module.exports = app

})