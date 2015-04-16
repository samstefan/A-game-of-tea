/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , _ = require('underscore')
  , Start = require('./start')
  , Hud = require('./hud')
  , NewGame = require('./new-game')
  , Views = Stapes.subclass({

    constructor: function(app) {
      // Load views
      _.extend(this,
        { start: new Start(app)
        , hud: new Hud(app)
        , newGame: new NewGame(app)
        })
    }

  })

module.exports = Views