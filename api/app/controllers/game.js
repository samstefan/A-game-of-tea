/*
 * Module Dependencies
 */

var _ = require('underscore')

module.exports = function (app, options) {

  var logger = options.logger
    , properties = options.properties
    , pusher = options.pusher
    , games = options.games

  logger.info('Setting up game routes')

  app.get('/api/game/new', function(req, res) {
    var query = req.query
      , userName = query.name
      , newGame = games.new(userName)

    res.status(200).jsonp(newGame)
  })

}