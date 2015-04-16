/*
 * Module Dependencies
 */

var _ = require('underscore')

module.exports = function (app, options) {

  var logger = options.logger
    , properties = options.properties
    , pusher = options.pusher
    , games = options.games
    , users = options.users

  logger.info('Setting up auth routes')

  app.get('/api/auth', function(req, res) {
    var query = req.query
      , socketId = query.socket_id
      , channel = query.channel_name
      , callback = query.callback
      , auth = JSON.stringify(pusher.authenticate(socketId, channel, { user_id: users.new() }))

    res.status(200).send(callback.replace(/\'/g,'') + '(' + auth + ');')
  })

}