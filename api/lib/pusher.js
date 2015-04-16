/*
 * Module dependences
 */

var Pusher = require('pusher')

module.exports = function(properties) {

  function bootstrap(callback) {
    var pusher = new Pusher(
      { appId: properties.global.pusher.appId
      , key: properties.global.pusher.key
      , secret: properties.global.pusher.secret
      })

    return callback(pusher)
  }

  return { bootstrap: bootstrap }

}