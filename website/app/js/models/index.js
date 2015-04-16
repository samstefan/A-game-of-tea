/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , _ = require('underscore')
  , User = require('./user')
  , Game = require('./game')
  , Members = require('./members')
  , Models = Stapes.subclass({

    constructor: function(app) {
      // Set up models
      _.extend(this,
        { user: new User(app)
        , game: new Game(app)
        , members: new Members(app)
        })
    }

  })

module.exports = Models
