module.exports = function() {

  function initialize(app) {
    // Connected to pusher
    if (app.config.debug) {
      Pusher.log = function(message) {
        if (window.console && window.console.log) {
          window.console.log(message)
        }
      }
    }

    return new Pusher(app.config.globalProperties.pusher.applicationKey)
  }

  return { initialize: initialize }

}