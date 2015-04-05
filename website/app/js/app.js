(function () {

  var Views = require('./views/')
    , pusher = require('./lib/pusher')()
    , globalProperties = require('./../../../global-properties')
    , config =
      { name: 'aGameOfTea'
      , debug: true
      , globalProperties: globalProperties
      }
    , app =
      { initialize: function (config) {
        // set config
        this.config = config
        // Set up pusher
        this.pusher = pusher.initialize(this)
        // load views
        this.views = new Views(this)
      }
    }

    app.initialize(config)

})()