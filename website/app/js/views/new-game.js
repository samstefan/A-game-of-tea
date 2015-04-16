/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , render = require('../lib/render-template')()

/*
 * New game view
 */

var newGameView = Stapes.subclass({
  constructor: function(app) {
    this.app = app
  }

, get: function() {
    var $template = $('.template__new-game')
      , $renderedTemplate = render.template($template.html())

    this.bindEvents($renderedTemplate)
    return $renderedTemplate
  }

, bindEvents: function($template) {

  }
})

module.exports = newGameView
