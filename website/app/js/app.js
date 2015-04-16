(function () {

  var Views = require('./views/')
    , Models = require('./models/')
    , Dispatcher = require('./dispatcher/')
    , pusher = require('./lib/pusher')()
    , globalProperties = require('./../../../global-properties')
    , game = require('./lib/game')()
    , config =
      { name: 'aGameOfTea'
      , debug: true
      , globalProperties: globalProperties
      }
    , app =
      { initialize: function(config) {
        // Set config
        this.config = config
        // Set up pusher
        this.pusher = pusher.initialize(this)
        // Get game state
        this.exisitngGame = game.exsiting()
        // Load models
        this.models = new Models(this)
        // Load views
        this.views = new Views(this)
        // Load controllers
        this.dispatcher = new Dispatcher(this)
      }
    }

    app.initialize(config)

})()