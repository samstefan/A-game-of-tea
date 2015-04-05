/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , Start = require('./start')
  , Views = Stapes.subclass({

    constructor: function() {
      // Load views
      this.views = { start: new Start() }
    }

  })

module.exports = Views