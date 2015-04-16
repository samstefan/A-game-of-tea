/*
 * Module Dependencies
 */

var _ = require('underscore')

module.exports = function (app, options) {

  var logger = options.logger
    , properties = options.properties
    , pusher = options.pusher
    , users = options.users

  logger.info('Setting up user routes')

  app.get('/api/user/setName', function(req, res) {
    var query = req.query
      , userName = query.userName
      , userId = query.userId

    users.setUserName(userId, userName, function(error, user) {
      if (error) {
        res.status(500).jsonp({ error: error })
      }

      res.status(200).jsonp(user)
    })
  })

}