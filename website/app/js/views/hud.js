/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , render = require('../lib/render-template')()

/*
 * HUD view
 */

var hudView = Stapes.subclass({
  constructor: function(app) {
    this.app = app
  }

, get: function(data) {
    var $template = $('.template__hud')
      , $renderedTemplate = render.template($template.html(), data)

    return $renderedTemplate
  }

})

module.exports = hudView
