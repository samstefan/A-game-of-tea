/*
 * Module Dependencies
 */

var Stapes = require('./../vendor/stapes.min.js')
  , render = require('../lib/render-template')()

/*
 * Start view
 */

var StartView = Stapes.subclass({
  constructor: function(app) {
    this.app = app
  }

, get: function() {
    var $template = $('.template__start')
      , $renderedTemplate = render.template($template.html())

    this.bindEvents($renderedTemplate)
    return $renderedTemplate
  }

, bindEvents: function($template) {
    var scope = this
      , $submitButton = $template.find('.start__submit')
      , $nameInput = $template.find('.start__name-input')

    $submitButton.on('click', function(event) {
      event.preventDefault()
      var name = $nameInput.val()

      if (name.length > 0) {
        scope.app.models.user.set('user', name)
      }
    })
  }
})

module.exports = StartView
